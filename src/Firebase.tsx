import { initializeApp } from 'firebase/app';
import 'firebase/compat/database';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCXMrguwxRkxNKum8xsKDpyVNCT3xMGFjs",
    authDomain: "me-confess.firebaseapp.com",
    databaseURL: "https://me-confess-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "me-confess",
    storageBucket: "me-confess.appspot.com",
    messagingSenderId: "850043029458",
    appId: "1:850043029458:web:1cb037a82caa7e614dea0b",
    measurementId: "G-9Y4HEBWY83"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const confessionsRef = ref(db, "confessions");
