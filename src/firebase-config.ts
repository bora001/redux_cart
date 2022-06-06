import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseKey } from "./dev";

const firebaseConfig = {
  apiKey: firebaseKey.REACT_APP_APIKEY,
  authDomain: firebaseKey.REACT_APP_AUTH_DOMAIN,
  databaseURL: firebaseKey.REACT_APP_DATA_BASE_URL,
  projectId: firebaseKey.REACT_APP_PROJECT_ID,
  storageBucket: firebaseKey.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: firebaseKey.REACT_APP_MESSAGING_SENDER_ID,
  appId: firebaseKey.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
