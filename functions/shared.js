const admin = require("firebase-admin");

admin.initializeApp();

module.exports = {
  db: admin.firestore(),
};
