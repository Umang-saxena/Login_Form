// -----------------This is client side js---------------------
console.log("Hello Guys");

var submitObj = document.getElementById("submitButton");
// function submit(){
//     console.log("Submit Clicked");
//     var email=document.getElementsByClassName("emailInput").value;
//     var pass=document.getElementsByClassName("passwordInput").value;
//     document.writeln("Your Email:"+ "\t"+ email);
//     document.writeln("Your password:"+ "\t"+ pass);
// };

function btnSubmit() {
    var email = document.getElementsByClassName("emailInput").value;
    var pass = document.getElementsByClassName("passwordInput").value;
    console.log("Your Email:" + email);
}
