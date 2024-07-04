import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-1-B5MPX6MYUTOqN7CqdVj72qC2UCkQg",
    authDomain: "rendy-quiz-app.firebaseapp.com",
    projectId: "rendy-quiz-app",
    storageBucket: "rendy-quiz-app.appspot.com",
    messagingSenderId: "477265786131",
    appId: "1:477265786131:web:7d6e2e4ee88cf9df4b96e6",
    measurementId: "G-M1V4W89EN2"
};

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  export{auth,db};
  