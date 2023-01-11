import {initializeApp} from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCslA0YFcjISURoErGxxau6CxRPViqylLk",
    authDomain: "image-upload-2565a.firebaseapp.com",
    projectId: "image-upload-2565a",
    storageBucket: "image-upload-2565a.appspot.com",
    messagingSenderId: "64494121209",
    appId: "1:64494121209:web:7eaf874a4bc4281a18f228",
    measurementId: "G-5340WNCBPZ"
  };
  const fireapp=initializeApp(firebaseConfig);
  export const storage=getStorage(fireapp);
