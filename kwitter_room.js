
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDUNLMKNSQ2y9E-UrzyjBajNh2jXfMKTqs",
    authDomain: "kwitter-14c43.firebaseapp.com",
    databaseURL: "https://kwitter-14c43-default-rtdb.firebaseio.com",
    projectId: "kwitter-14c43",
    storageBucket: "kwitter-14c43.appspot.com",
    messagingSenderId: "141801958669",
    appId: "1:141801958669:web:52bd6ad61e073be7319444"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //Firebase Links Ends

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names)
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location ="kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
    window.location = "index.html";
}