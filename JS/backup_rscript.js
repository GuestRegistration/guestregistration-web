 var config= {
	apiKey: "AIzaSyB9lA-Kv3O0CSM_lhDqkkWbhIEF2yrWlEg",
	authDomain: "guestregistration-4140a.firebaseapp.com",
	databaseURL: "https://guestregistration-4140a.firebaseio.com",
	projectId: "guestregistration-4140a",
	storageBucket: "guestregistration-4140a.appspot.com",
	messagingSenderId: "840040500916",
	appId: "1:840040500916:web:5058a43127601b7bb091e1",
measurementId: "G-GJS6X8Z6X4"
 } ;

firebase.initializeApp(config); 

    
 function sendSignInWithEmailLink() {
  const actionCodeSettings = {
     url:'https://fluttertest.000webhostapp.com/JavaScript/Read%20Data/contactinfo.html',
     dynamicLinkDomain : 'guestsignin.page.link',
    handleCodeInApp: true,
   };
  var email = document.getElementById("email").value;
   console.log("email"+email);
   console.log( "testing the currentUser.." );
     var user = firebase.auth().currentUser;
        console.log("check user details");
   console.log(user);
      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
.then(function() {
 console.log("inside try email"+email);
  console.log("Email sent to"+email);
          alert('An email was sent to ' + email + '. Please use the link in the email to sign-in.');
          window.localStorage.setItem('emailForSignIn', email);
 
})
.catch(function(error) {
 
 console.error("error"+error);
 });
  /*  if(user === null){
   console.log("newuser so re-direct to contact page");
 //window.location.href = "https://fluttertest.000webhostapp.com/JavaScript/Read%20Data/contactinfo.html";

    }
    else{
                      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
.then(function() {
 console.log("inside try email"+email);
  console.log("Email sent to"+email);
          alert('An email was sent to ' + email + '. Please use the link in the email to sign-in.');
          window.localStorage.setItem('emailForSignIn', email);
 
})
.catch(function(error) {
 
 console.error("error"+error);
 });
       
    }*/
 
    }
 

 
   