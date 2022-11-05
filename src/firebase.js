// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDt7hP5YDa6hNmxnhU_wsHhQ5LFTG87vdU',
  authDomain: 'fir-app-4dda4.firebaseapp.com',
  projectId: 'fir-app-4dda4',
  storageBucket: 'fir-app-4dda4.appspot.com',
  messagingSenderId: '406763138233',
  appId: '1:406763138233:web:781f0cb612c4aef94cff68',
  measurementId: 'G-XG0834RYTS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
