const firebaseConfig = {
    apiKey: "AIzaSyBQjgCQt-o-6L8qYe-1uM6UZc8_BYwFC6I",
    authDomain: "kwitter101-7f079.firebaseapp.com",
    databaseURL: "https://kwitter101-7f079-default-rtdb.firebaseio.com",
    projectId: "kwitter101-7f079",
    storageBucket: "kwitter101-7f079.appspot.com",
    messagingSenderId: "401836589591",
    appId: "1:401836589591:web:6820fb94b261886b59d252"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }