const admin = require("firebase-admin");

const serviceAccount = require("../configuration/firebase-service-account.json");
const firebaseConfig = require("../configuration/firebase-config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: firebaseConfig.storageBucket,
});

const bucket = admin.storage().bucket();
module.exports = { bucket };
