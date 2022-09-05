//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyALyWHEsMq-WEAYYuBoWHFdmtvnWS_xdv8",
      authDomain: "kwitter-ff3ef.firebaseapp.com",
      databaseURL: "https://kwitter-ff3ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-ff3ef",
      storageBucket: "kwitter-ff3ef.appspot.com",
      messagingSenderId: "443566331292",
      appId: "1:443566331292:web:ed628ddf93e927cfdd6459",
      measurementId: "G-YV5XG3VJS6"
    };
    firebase.initializeApp(firebaseConfig)
     user_name=localStorage.getItem("user_name")
     room_name=localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
