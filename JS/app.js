

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
 

    function getURL() {
var url =  window.location.href;
console.log("url"+window.location.href);
const urlParams = new URLSearchParams(window.location.search);
const documentid = urlParams.get('Reservation');
console.log("parsedUrl"+url);
console.log("documentid"+documentid); 
var reserveid="vqf5uu0lExJima3LfFWb";
  
const db= firebase.firestore();
const dbRef1=db.doc('/Reservation/'+documentid);
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
	document.getElementById("property_id").innerHTML=doc.data().property_id;

	} else {
		console.log("Data not Present");
	}
  })
    }
    	//document.getElementById("property_id");
//console.log("Data  Present" + property_id);
window.onload = getURL;

	 


