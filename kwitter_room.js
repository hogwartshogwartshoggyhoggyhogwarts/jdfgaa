
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML="welcome"+ user_name
    
    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML=row
      //End code
      });});}
getData();

function redirecttoroomname(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}


