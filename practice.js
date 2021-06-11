
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDERBzTakkqw_NgIN-Q76hN3B7UfJlYXgs",
    authDomain: "class-93-97.firebaseapp.com",
    databaseURL:"https://project-93-97-default-rtdb.firebaseio.com/",
    projectId: "class-93-97",
    storageBucket: "class-93-97.appspot.com",
    messagingSenderId: "752244171537",
    appId: "1:752244171537:web:66ef1d582e4cbab84822b0"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    var username = document.getElementById("User_name").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding user"
    });
}