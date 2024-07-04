// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Sign in with Google
const googleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log(result.user);
      // Handle sign-in successful
    })
    .catch((error) => {
      console.error(error);
      // Handle errors here
    });
};

// Sign in with Email and Password
const emailSignIn = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      // Handle sign-in successful
    })
    .catch((error) => {
      console.error(error);
      // Handle errors here
    });
};

// Sign up with Email and Password
const emailSignUp = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      // Handle sign-up successful
    })
    .catch((error) => {
      console.error(error);
      // Handle errors here
    });
};

