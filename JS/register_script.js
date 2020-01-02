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

                  const actionCodeSettings = {
     url:'https://fluttertest.000webhostapp.com/JavaScript/Read Data/id_verification.html',
     dynamicLinkDomain : 'guestsignin.page.link',
    handleCodeInApp: true,
   };
 function sendSignInWithEmailLink() {
     
       var email = document.getElementById("email").value;
       var email1 = document.getElementById("email").value;
         if (email === "") {
          InsertErrorMessageIntoPage("Please Enter a Valid Email!");

    return false;
  }
  else  
{
        //  sendSignInWithEmailLink();
const db= firebase.firestore();
 db.collection("users").where("email", "==", email)
    .get()
    .then(function(querySnapshot) {
              console.log(querySnapshot);
        querySnapshot.forEach(function(doc) {
        //    console.log("email is match");
           // console.log(doc.id, " => ", doc.data());
   console.log("email"+email);
        });
       console.log(querySnapshot.docs.length);
   const length = querySnapshot.docs.length;
      console.log("length"+length);    
   if(length !== 0){
            console.log("inside if");
             firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
.then(function() {
 console.log("inside try email"+email);
  console.log("Email sent to"+email);
          alert('An email was sent to ' + email + '. Please use the link in the email to sign-in.');
          window.localStorage.setItem('emailForSignIn', email);
 
})
.catch(function(error) {
 console.error("error in send email "+error);
 });

}
else{
     console.log("inside else");
               window.localStorage.setItem('emailForSignIn', email);

   window.location.href = "https://fluttertest.000webhostapp.com/JavaScript/Read%20Data/contactinfo.html";
     console.log("no data found");
}
     
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

return true;
}

     
    }
 

 
   /*
      console.log( "testing the currentUser.." );
     var user = firebase.auth().currentUser;
        console.log("check user details");
   console.log(user);
   */
/*db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
    });
});
    db.collection("users")
    .where("email", "==", "featherdev01@gmail.com")
    .get()
    .then(snap => {
        snap.forEach(doc => {
            console.log("hai");
            console.log(doc.data());
        });
    });*/
    
    

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