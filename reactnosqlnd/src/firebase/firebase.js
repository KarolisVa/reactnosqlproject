import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.fieldValue = app.firestore.FieldValue;
  }
  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    await newUser.user.updateProfile({
      displayName: name,
    });

    this.db.collection("users").add({
      uid: newUser.user.uid,
      name: newUser.user.displayName,
      email: newUser.user.email,
      posts: [],
    });
  }
  async login(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;
