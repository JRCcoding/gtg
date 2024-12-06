// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBx75arC35IX2wvg0eIULWQglT4Iv9bLGQ',
  authDomain: 'greenthumb-c5687.firebaseapp.com',
  projectId: 'greenthumb-c5687',
  storageBucket: 'greenthumb-c5687.firebasestorage.app',
  messagingSenderId: '597416673444',
  appId: '1:597416673444:web:3011ba7b359dddad536631',
  measurementId: 'G-4F76BJSZ0K',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export { firebaseConfig, app }
