const firebaseConfig = {
  apiKey: 'AIzaSyBrqis-cT9SY8Dn13a9wWdy0zAoYIjVlz0',
  authDomain: 'csci225-iervin.firebaseapp.com',
  projectId: 'csci225-iervin',
  storageBucket: 'csci225-iervin.appspot.com',
  messagingSenderId: '917846296557',
  appId: '1:917846296557:web:c6c73fca789db695d8c9e4',
  measurementId: 'G-SM68Q4DXW9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  //change the following code
  var email = $("#signup-form input[name='username']").val();
  var password = $("#signup-form input[name='password']").val();
  var cpassword = $("#signup-form input[name='cpassword']").val();
  console.log("email: "+ email + "  password: "+ password +"  cpassword: "+ cpassword)
  if(cpassword != password){
    alert("The passwords do not match");
  }

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});


//using google
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  console.log("success");
  window.location.href = "Login.html";
})