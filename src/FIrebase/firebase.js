import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcBFZIKu9QOVK71QBOyf3ejrV8u2wl58k",
  authDomain: "clone-ytjq.firebaseapp.com",
  projectId: "clone-ytjq",
  storageBucket: "clone-ytjq.appspot.com",
  messagingSenderId: "984917364178",
  appId: "1:984917364178:web:ce60b71a34c920cfe98c0b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    const user = response.user;
    return user;
  } catch (error) {
    return error;
  }
};
