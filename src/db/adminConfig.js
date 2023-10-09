import admin from 'firebase-admin'
import { getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const alreadyCreatedAps = getApps();

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_ADMIN_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_ADMIN_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_ADMIN_AUTH_URI,
  "token_uri": process.env.FIREBASE_ADMIN_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_ADMIN_AUTH_PROVIDER_CERT_URL,
  "client_x509_cert_url": process.env.FIREBASE_ADMIN_CLIENT_CERT_URL,
  "universe_domain": "googleapis.com"
};

// if (!admin.apps.length) {
//   const firebaseAdmin = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
//   });
// }

// export const adminConfig = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

export const adminConfig = alreadyCreatedAps.length === 0
    ? admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      })
    : alreadyCreatedAps[0];

// export const app = adminConfig.firestore()


// export const db = admin.(app)
export const adminAuth = getAuth(adminConfig)
export const adminDB = adminConfig.firestore();