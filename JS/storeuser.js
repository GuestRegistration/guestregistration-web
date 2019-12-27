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


    
 function storeuser() {
                   const actionCodeSettings = {
     url:'https://fluttertest.000webhostapp.com/JavaScript/Read%20Data/index1.html',
     dynamicLinkDomain : 'guestsignin.page.link',
    handleCodeInApp: true,
   };
         var email = window.localStorage.getItem('emailForSignIn');
console.log("email"+email);
       //var email = document.getElementById("email").value;
       //var email1 = document.getElementById("email").value;
      var firstname = document.getElementById("firstname").value;
       var lastname = document.getElementById("lastname").value;
       var phone = document.getElementById("phone").value;

console.log(firstname);
console.log(firstname);
console.log("lname"+lastname);
console.log("phone"+phone);

  if (phone === "" || lastname ==="" || firstname ==="") {
    //alert("Phone Number must be filled out");
    InsertErrorMessageIntoPage("One or more fields are incomplete!.");
    return false;
  }
  else 
{
//storeuser();
//return true;
const db= firebase.firestore();
    db.collection("users")
    .doc()
    .set(
        {
            name: firstname,
            lastname: lastname,
            phone: phone,
            email:email
            
        },
        { merge: true }
    ); 
    //var email1 = "featherdev01@gmail.com"
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



    /*db.collection("users").where("email", "==", email)
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
   window.location.href = "https://fluttertest.000webhostapp.com/JavaScript/Read%20Data/contactinfo.html";
     console.log("no data found");
}
     
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

     
    }*/
          
     }