import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";


(function () {
  // Your web app's Firebase configuration, get it from your firebase project settings page on the General tab.
  const firebaseConfig = {
    apiKey: "AIzaSyAD2bnA0tGEGm7jzC_zjX3YW5RUQeY8u1I",
    authDomain: "testappauth-dce8a.firebaseapp.com",
    projectId: "testappauth-dce8a",
    storageBucket: "testappauth-dce8a.appspot.com",
    messagingSenderId: "584234264975",
    appId: "1:584234264975:web:d5cc1f52c8c51889efc3fa",
    measurementId: "G-ZQXKKZFTC4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  
  // TODO: initialize provider for google auth
  const provider = new GoogleAuthProvider();
  provider.initializeApp(app)
  console.log("app initialized...");
  
  // get elements
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");
  const logout = document.getElementById("logout");
  const loggedInStatus = document.getElementById("loggedInStatus");
  const googlelogin = document.getElementById("googlelogin");

  // login
  login.addEventListener("click", (e) => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // signup
  signup.addEventListener("click", (e) => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //TODO: Add Google Sign in
  googlelogin.addEventListener("click", (e) => {
    console.log("google sign in clicked");

    // TODO: Use signInWithPopup to implement Google sign in
    // Hint: refer to instructions in the official google documentation: https://firebase.google.com/docs/auth/web/google-signin
  });


  // logout
  logout.addEventListener("click", (e) => {
    auth.signOut();
  });

  // login state
  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      loggedInStatus.innerText = `You are logged in using the following email: ${firebaseUser.email}`;
      logout.style.display = "inline";
      login.style.display = "none";
      signup.style.display = "none";
      email.style.display = "none";
      password.style.display = "none";
      googlelogin.style.display = "none";
    } else {
      console.log("User is not logged in");
      loggedInStatus.innerText = "You are not yet logged in";
      login.style.display = "inline";
      signup.style.display = "inline";
      email.style.display = "inline";
      googlelogin.style.display = "inline";
      password.style.display = "inline";
      logout.style.display = "none";
    }
  });
})();
