
//var reserveid="vqf5uu0lExJima3LfFWb";
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

  /*<script type="text/javascript" src="config.js"></script>*/

//const dbRef = firestore.database().ref();
//const dbRef = firebase.database().ref();


const db= firebase.firestore();
db.collection("users").where("email", "==", email)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

/*const dbRef1=db.doc('users');
var query = dbRef1.where("email", "==", email);
dbRef1.get().then(function(doc) {
	if (doc.exists) {
	  const data = doc.data()
	console.log(doc.data());
	document.getElementById("primary_guest").innerHTML=document.getElementById("primary_guest").innerHTML+doc.data().Primary_guest;
	document.getElementById("check-in-date").innerHTML=doc.data().CheckIn_date;
	document.getElementById("check-out-date").innerHTML=doc.data().Checkout_date;
	document.getElementById("booking-channel").innerHTML=doc.data().Booking_channel;
	document.getElementById("number-of-guests").innerHTML=doc.data().No_of_guest;
	document.getElementById("payment-due").innerHTML=doc.data().payment;
	} else {
		console.log("Data not Present");
	}
  })*/
	 


