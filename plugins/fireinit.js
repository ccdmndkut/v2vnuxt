// global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDMbILM1a366tYFM3-nOLwCUXapJ8ETqmw',
    authDomain: 'vaclaims-194006.firebaseapp.com',
    databaseURL: 'https://vaclaims-194006.firebaseio.com',
    projectId: 'vaclaims-194006',
    storageBucket: 'vaclaims-194006.appspot.com',
    messagingSenderId: '524576132881'
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase
const fireDb = firebase.firestore()
export { fireDb }
