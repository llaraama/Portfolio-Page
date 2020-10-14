
// Initalize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC75OayDzakggtPEs-DdOwtgqMeTRbEoJI",
    authDomain: "portfoliopage-95f74.firebaseapp.com",
    databaseURL: "https://portfoliopage-95f74.firebaseio.com",
    projectId: "portfoliopage-95f74",
    storageBucket: "portfoliopage-95f74.appspot.com",
    messagingSenderId: "392520646281",
    appId: "1:392520646281:web:d4216ecc14690cff9dd058",
    measurementId: "G-JHE85VMKBB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var number=getInputVal('number')
    var message = getInputVal('message');
    console.log(process.env.apiKey1)

  //save message
  saveMessage(name,company,email,number,message);
  
//     // Show alert
    document.querySelector('.alert').style.display = 'block';
  
//     // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
//     // Clear form
    document.getElementById('contactForm').reset();
  }
  
//   // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
//   // Save message to firebase
  function saveMessage(name, company, email, number,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
     name:name,
      company:company,
      email:email,
      number:number,
      message:message
    });
  }