const { onCall, HttpsError } = require('firebase-functions/v2/https')
const { defineSecret } = require('firebase-functions/params')
const { initializeApp } = require('firebase-admin/app')
const { getFirestore, FieldValue } = require('firebase-admin/firestore')
const { getAuth } = require('firebase-admin/auth')
const { logger } = require('firebase-functions')
initializeApp()
const recaptchaSecret = defineSecret('RECAPTCHA_SECRET_KEY')
exports.submitContactMessage = onCall({ region: 'europe-west3', secrets: [recaptchaSecret], enforceAppCheck: false }, async (request) => {
  const d = request.data || {}
  const clean = (s, n) => typeof s === 'string' ? s.trim().slice(0, n) : ''
  const name = clean(d.name, 100), email = clean(d.email, 254), subject = clean(d.subject, 150), message = clean(d.message, 5000)
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 3 || d.consent !== true) throw new HttpsError('invalid-argument', 'Bitte Eingaben prüfen.')
  const token = clean(d.captchaToken, 5000)
  if (!token) throw new HttpsError('failed-precondition', 'reCAPTCHA erforderlich.')
  const body = new URLSearchParams({ secret: recaptchaSecret.value(), response: token })
  let verification
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body })
    verification = await response.json()
  } catch (e) { throw new HttpsError('unavailable', 'Spamprüfung gerade nicht verfügbar.') }
  if (!verification.success) throw new HttpsError('permission-denied', 'reCAPTCHA-Prüfung fehlgeschlagen.')
  await getFirestore().collection('contactMessages').add({
    name, email, subject, message, status: 'new', createdAt: FieldValue.serverTimestamp(),
    captchaVerified: true, captchaHostname: verification.hostname || null
  })
  return { ok: true }
})
// Run once in a trusted environment to grant admin access to a specific Firebase Auth user:
// node scripts/set-admin.cjs user@example.com
