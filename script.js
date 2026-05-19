
console.log("Running Sal's Strawberries")



function writeForm(){
  console.log("Welcome!")
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}




var GLOBAL_user; // Google's user object

// set up a listener for the login state of the user.
function fb_login() {
  firebase.auth().onAuthStateChanged(LOGIN_CALLBACK);
}

// run the google login popup
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user; // save the user details object to a global variable
    console.log("User has logged in")
  });
}

// run when the login state of the user changes
function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user; //save the user details object to a global variable
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
  }
}

