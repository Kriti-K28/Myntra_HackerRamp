

    //form validation with javascript
    function formValidation()
    {
        //Get Value
        //if user doesnt exist transfer to another page and ask details
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

              alert(email);

        //Validation Conditions here
        if (name.length < 1) {
            alert("Name is Required!");
            
        }       
        else if (email.length < 1) {
            alert("Email is Required!");
           
        } 
        else if (msg.length < 1) {
            alert("Message is Required!");
           
        }
        else
            signUpWithEmailPassword(email, password); //if isValidForm is true then form submits else submission is stopped
        
    }


    // These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
import firebase from "firebase/app";
import "firebase/auth";

function signInWithEmailPassword(email, password) {
 
  // [START auth_signin_password]
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  // [END auth_signin_password]
}

function signUpWithEmailPassword(email, password) {
  
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up 
      var user = userCredential.user;
      //redirect to ask dets
      // ...
    })
    .catch((FirebaseAuthUserCollisionException) => {
      //signin
      signInWithEmailPassword(email, password);
      //redirect to home
    });
  // [END auth_signup_password]
}

function sendEmailVerification() {
  // [START auth_send_email_verification]
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent!
      // ...
    });
  // [END auth_send_email_verification]
}

function sendPasswordReset(email) {
  
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_send_password_reset]
}


    /*
    //Form validation with Jquery and JavaScript
    $(document).ready(function () {

        $('#form').submit(function (e) {

            //Get Value
            var name = $('#name').val().trim();
            var email = $('#email').val().trim();
            var msg = $('#msg').val().trim();

            //reset the errors
            $(".error").remove();

            var isValidForm = true; 

            //Validation Conditions here
            if (name.length < 1) {
                $('#name').after('<span class="error">This field is required</span>');
                var isValidForm = false;
            }
            
            if (email.length < 1) {
                $('#email').after('<span class="error">This field is required</span>');
                var isValidForm = false;
            } 

            if (msg.length < 1) {
                $('#msg').after('<span class="error">This field is required</span>');
                var isValidForm = false;
            }

            return isValidForm;  //if isValidForm is true then form submits else submission is stopped
                     
        });

    });*/

