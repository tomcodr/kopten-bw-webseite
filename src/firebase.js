
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getFunctions } from 'firebase/functions'

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const firebaseConfigured = Boolean(
  config.apiKey && config.projectId && config.appId
)

const app = firebaseConfigured ? initializeApp(config) : null

// App Check zunächst nur im Produktions-Build aktivieren.
// Die Durchsetzung in Firebase bleibt vorerst ausgeschaltet.
const recaptchaEnterpriseKey =
  import.meta.env.VITE_RECAPTCHA_ENTERPRISE_SITE_KEY

if (app && import.meta.env.PROD && recaptchaEnterpriseKey) {
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(recaptchaEnterpriseKey),
    isTokenAutoRefreshEnabled: true,
  })
}

export const auth = app ? getAuth(app) : null
export const db = app ? getFirestore(app) : null
export const storage = app ? getStorage(app) : null
export const functions = app
  ? getFunctions(app, import.meta.env.VITE_FIREBASE_REGION || 'europe-west3')
  : null
