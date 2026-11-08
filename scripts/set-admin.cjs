// Run from the project root after installing functions dependencies and authenticating Firebase CLI.
// Usage: node scripts/set-admin.cjs admin@example.com
const admin = require('../functions/node_modules/firebase-admin')
admin.initializeApp()
const email = process.argv[2]
if (!email) throw new Error('Usage: node scripts/set-admin.cjs admin@example.com')
;(async () => {
  const user = await admin.auth().getUserByEmail(email)
  await admin.auth().setCustomUserClaims(user.uid, { ...(user.customClaims || {}), admin: true })
  console.log(`Admin claim assigned to ${email}. The user must sign in again.`)
  process.exit(0)
})().catch(e => { console.error(e); process.exit(1) })
