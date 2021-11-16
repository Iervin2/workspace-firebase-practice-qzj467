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
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = document.getElementById('login').value;
  var password = document.getElementById('pwd').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
