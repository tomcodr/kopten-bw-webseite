# Kopten BW – Vue 3 Website

Responsive Vue 3 + Vite website for kopten-bw.de, with Vue Router, a mobile-friendly gallery admin, Firebase Authentication/Firestore/Storage and a contact form protected by server-verified Google reCAPTCHA v2.

## Local development

Requirements: Node.js 20+ recommended.

```bash
npm install
cp .env.example .env
# Fill .env with Firebase Web app config and a reCAPTCHA v2 checkbox site key
npm run dev
```

Build check: `npm run build`.

Without Firebase credentials, the public pages still run with local images; contact submission and admin uploads require Firebase setup.

## Firebase setup (required for production features)

1. Create a Firebase project and register a **Web app**. Copy its config into `.env`.
2. Enable **Authentication → Sign-in method → Email/Password**. Create an Auth account for each admin.
3. Create a Cloud Firestore database and enable Firebase Storage.
4. In Google reCAPTCHA Admin, create a **reCAPTCHA v2 checkbox** site key for both localhost (development) and your production domain. Put the site key in `VITE_RECAPTCHA_SITE_KEY`.
5. Install Firebase CLI and log in. Deploy rules/functions:
   ```bash
   npm install -g firebase-tools
   firebase login
   cd functions && npm install && cd ..
   firebase deploy --only firestore:rules,storage,functions
   ```
6. Set the private verification secret in Firebase Functions secrets:
   ```bash
   firebase functions:secrets:set RECAPTCHA_SECRET_KEY
   ```
   Paste the **reCAPTCHA secret key** when prompted, then deploy functions again:
   ```bash
   firebase deploy --only functions
   ```
7. Grant admin claims to the accounts you trust. Sign in to the Firebase project in a trusted admin environment; install the Admin SDK for the script (`cd functions && npm install`), then run:
   ```bash
   node scripts/set-admin.cjs admin@example.com
   ```
   First run `gcloud auth application-default login` on the trusted workstation, or set `GOOGLE_APPLICATION_CREDENTIALS` to a service-account JSON path. **Never put service-account keys or the reCAPTCHA secret in `.env` or frontend code.** Sign out/in after granting a claim.
8. Deploy the built `dist/` directory to Firebase Hosting or another static host. Configure SPA rewrites so routes like `/galerie` and `/admin` serve `index.html`. Add your live domain to Firebase Auth authorized domains and reCAPTCHA allowed domains.

## Security notes

- Firestore and Storage rules restrict writes to authenticated users with the Firebase custom claim `admin: true`.
- Contact messages are written only by the callable Cloud Function after server-side reCAPTCHA verification; the browser never receives the reCAPTCHA secret.
- Contact records are private by default. To read them, use the Firebase Console or build a separate trusted/admin-only inbox with its own admin-claim authorization.
- Configure a privacy policy and cookie/privacy disclosures suitable for your organization before going live. Google reCAPTCHA has its own terms and privacy requirements.
- Test the production deployment and Firebase rules before announcing the site.
