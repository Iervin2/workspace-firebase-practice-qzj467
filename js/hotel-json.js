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
//object examples
var testJson = {};
testJson['lastname'] = 'zhang';
testJson['location'] = 'aiken';
console.log(testJson);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  const input = $('form').serializeArray();
  console.log(input);
  /* save the data to database */
  var inputJSON = {};
  for (var i = 0; i < input.length; i++) {
    var n = input[i]['name'];
    var v = input[i]['value'];
    inputJSON[n] = v;
  }
  firebase.firestore().collection('hotelRes').add(inputJSON); //saves the data

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hotelRes")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().name);
      console.log(doc.data().num);
      console.log(doc.data().room);
      console.log(doc.data().checkin)
      console.log(doc.data().checkout);
    });
  });
