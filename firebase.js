import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAQA1ar2jtv-neDgUhZ8hNI3TIklhOuOnk',
  authDomain: 'elabs-861fd.firebaseapp.com',
  projectId: 'elabs-861fd',
  storageBucket: 'elabs-861fd.appspot.com',
  messagingSenderId: '818784176321',
  appId: '1:818784176321:web:cbf68bd71ef42469e32c40',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
