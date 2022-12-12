// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXTC5Dic3i0k2dETktpSqwJtx-loCC0_k', // gitleaks:allow
  authDomain: 'palau-real-estate-d06e1.firebaseapp.com',
  projectId: 'palau-real-estate-d06e1',
  storageBucket: 'palau-real-estate-d06e1.appspot.com',
  messagingSenderId: '1007827454919',
  appId: '1:1007827454919:web:3db6cccce709d652aae7e2',
  databaseURL: 'https://palau-real-estate-d06e1-default-rtdb.firebaseio.com/'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // eslint-disable-line

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app); // eslint-disable-line