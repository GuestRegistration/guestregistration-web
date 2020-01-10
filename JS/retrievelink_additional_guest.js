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
 const storageService = firebase.storage();
const storageRef = storageService.ref();

 function handleSignIn() {
      // [START handlesignin]
      
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
       
        // You can also get the other parameters passed in the query string such as state=STATE.
        // Get the email if available.
    var email = window.localStorage.getItem('emailForSignIn');    
    console.log("email for Signin feather inside handle sign in"+email);
      if (!email) {
          // User opened the link on a different device. To prevent session fixation attacks, ask the
          // user to provide the associated email again. For example:
          email = window.prompt('Please provide the email you\'d like to sign-in with for confirmation.');
        }
        if (email) {
          // The client SDK will parse the code from the link for you.
          firebase.auth().signInWithEmailLink(email, window.location.href).then(function(result) {
            // Clear the URL to remove the sign-in link parameters.
            if (history && history.replaceState) {
              window.history.replaceState({}, document.title, window.location.href.split('?')[0]);
            }
            // Clear email from storage.
          //  window.localStorage.removeItem('emailForSignIn');
            // Signed-in user's information.
            
            var user = result.user;
            console.log("userobject")
            console.log(user);
            var isNewUser = result.additionalUserInfo.isNewUser;
              console.log("result");
            console.log(result);
            console.log("isNewUser"+isNewUser);
            /*if(user){
                window.location.href = "https://fluttertest.000webhostapp.com/JavaScript/Read%20Data/id_verification.html";
            }
            else{
                console.log("newuser");
            }*/
            
            if(isNewUser == true){
             console.log("newuser");
            var user1 = firebase.auth().currentUser;
                console.log(user1);
                console.log("firebase.auth().currentUser.uid");
                console.log(firebase.auth().currentUser.uid);
                                            console.log("firebase.auth().currentUser.email");
                                              console.log(firebase.auth().currentUser.email);
                var additional_guest_email = firebase.auth().currentUser.email;
                var additional_guest_uid = firebase.auth().currentUser.uid;
     var additionalemail = window.localStorage.setItem('additional_email',additional_guest_email);
 var additionaluid = window.localStorage.setItem('additional_uid',additional_guest_uid);


              //  storeuser(); 
            }
            else{
                 window.location.href = "https://fluttertest.000webhostapp.com/JavaScript/Read%20Data/appscreen.html";
 
            }
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            handleError(error);
            // [END_EXCLUDE]
          });
        }
      }
      // [END handlesignin]
    }
    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
         function handleError(error) {
      // Display Error.
      alert('Error: ' + error.message);
      console.log(error);
      // Re-enable the sign-in button.
      //document.getElementById('quickstart-sign-in').disabled = false;
    }
       
 function storeuser() {
 var user = firebase.auth().currentUser;
         //var email = window.localStorage.getItem('emailForSignIn');
//console.log("email"+email);
       //var email = document.getElementById("email").value;
       //var email1 = document.getElementById("email").value;
      var firstname = document.getElementById("firstname").value;
       var lastname = document.getElementById("lastname").value;
       var phone = document.getElementById("phone").value;
         var additional_guest_email = firebase.auth().currentUser.email;
console.log(firstname);
console.log("lname"+lastname);
console.log("phone"+phone);
console.log("firebase.auth().currentUser.uid");
console.log(firebase.auth().currentUser.uid);
  if (phone === "" || lastname ==="" || firstname ==="") {
     InsertErrorMessageIntoPage("One or more fields are incomplete!.");
    return false;
  }
  else 
{
 
const db= firebase.firestore();
    db.collection("users")
    .doc(firebase.auth().currentUser.uid)
    .set(
        {
            name: firstname,
            lastname: lastname,
            phone: phone,
            email:additional_guest_email,
            
        },
        { merge: true }
    ).then(function() {
           alert("You have been Successfully Register with Guest Registration App");
       //    window.location.href="https://fluttertest.000webhostapp.com/JavaScript/Read%20Data/id_verification.html";
           window.location.href="https://fluttertest.000webhostapp.com/JavaScript/Read%20Data/appscreen.html";


           }).catch(function(error){  // for when document is not correctly wrote
            alert("Got an error",error); 
             });
}
}
    
    function initApp() {
      // Restore the previously used value of the email.
      var email = window.localStorage.getItem('emailForSignIn');
      console.log("emailForSignInnnnnnnnnnnnnnn"+email);
     
      handleSignIn();
  
    }

   
  
    window.onload = initApp;