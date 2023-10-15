// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";


const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA6uknZE7x4EuNhsZx01KNsoO1Z8mCUmPQ",
    authDomain: "worshophood.firebaseapp.com",
    databaseURL: "https://worshophood-default-rtdb.firebaseio.com",
    projectId: "worshophood",
    storageBucket: "worshophood.appspot.com",
    messagingSenderId: "754343182340",
    appId: "1:754343182340:web:8c4331a4fd7215ec3c7551",
    measurementId: "G-GJSX3BF14P"
};

// Initialize Firebase
window. app = initializeApp(firebaseConfig);
window. analytics = getAnalytics(app); 

window. db = getFirestore(app); 

try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  function navigate(){
    window.location.href = "http://127.0.0.1:5500/page2.html";
  }

  function mythuat(){
    window.location.href = "http://127.0.0.1:5500/page3.html";
  }
  