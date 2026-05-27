/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
const firebaseConfig = {
  apiKey: "AIzaSyCRaSQsGrwm2-05ej0cAN6HAd1ND8f3JfI",
  authDomain: "mini-project-eebb0.firebaseapp.com",
  databaseURL: "https://mini-project-eebb0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mini-project-eebb0",
  storageBucket: "mini-project-eebb0.firebasestorage.app",
  messagingSenderId: "857380306514",
  appId: "1:857380306514:web:c0b76fae15d817612c698b",
  measurementId: "G-8XCNR7FJB2"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
