import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
//import { Toaster } from "react-hot-toast";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password, navigate) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/login");
    return user;
  } catch (error) {
    //toast.error(error.message);
  }
};

export const login = async (email, password, navigate) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    return user;
  } catch (error) {
    //toast.error(error.message);
    alert(error.message);
  }
};

export const logOut = async (email, password, navigate) => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    //toast.error(error.message);
  }
};
