
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDTLyUfQ9f6qQKkTaPgNoTQ4WxMTe4uUrs",
      authDomain: "project-93-97.firebaseapp.com",
      databaseURL:"project-93-97-default-rtdb",
      projectId: "project-93-97",
      storageBucket: "project-93-97.appspot.com",
      messagingSenderId: "875425587853",
      appId: "1:875425587853:web:17df982cd15ecaa13db8c4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
