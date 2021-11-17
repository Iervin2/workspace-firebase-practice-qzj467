// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrqis-cT9SY8Dn13a9wWdy0zAoYIjVlz0",
  authDomain: "csci225-iervin.firebaseapp.com",
  projectId: "csci225-iervin",
  storageBucket: "csci225-iervin.appspot.com",
  messagingSenderId: "917846296557",
  appId: "1:917846296557:web:c6c73fca789db695d8c9e4",
  measurementId: "G-SM68Q4DXW9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  const input = $('form').serializeArray();
  console.log(input);

  var inputJSON = {};
  for(var i=0; i < input.length; i++){
    var choice = input[i]['name']; 
    var comment = input[i]['value'];
    inputJSON[choice] = comment;
  }
  //saves data to database
  firebase.firestore().collection('survey').add(inputJSON);
  //clear entry
  $('form')[0].reset();
});

// update the result in table
firebase
  .firestore()
  .collection("survey")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    
    var num = 0;
    
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().choice);
      
      var result= doc.data().choice;
      switch(result){
            case "A":
                num = $('#ans1').val();
                $('#ans1').text() = num++;
                break;
            case "B":
                num = $("#ans2").val();
                $('#ans2').text() = num++;
                break;
            case "C":
                num = $("#ans3").val();
                $('#ans3').text() = num++;
                break;
            case "D":
                num = $("#ans4").val();
                $('#ans4').text() = num++;
                break;
            case "E":
                num = $("#ans5").val();
                $('#ans5').text() = num++;
                break;
            default:
                num = 0;
      }
    });
  });