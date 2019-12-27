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
            var isNewUser = result.additionalUserInfo.isNewUser;
            console.log(result)
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
    function initApp() {
      // Restore the previously used value of the email.
      var email = window.localStorage.getItem('emailForSignIn');
      console.log("emailForSignInnnnnnnnnnnnnnn"+email);
      // console.log("storedddddddmail"+emailForSignIn);
      //document.getElementById('email').value = email;
         //   document.getElementById('emailForSignIn').value = email;

      // Automatically signs the user-in using the link.
      handleSignIn();
      // Listening for auth state changes.
      // [START authstatelistener]
      /*firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // Update UI.
          
        } else {
            console.log("inside else");
              }
            });*/
      // [END authstatelistener]
    }
    window.onload = initApp;