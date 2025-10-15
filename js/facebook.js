var email_inp = document.getElementById("Email");
var pass_inp = document.getElementById("password");

var myemail = "sample@gmail.com";
var password = "sangwon";

function loginfunction() {
    var getemail = email_inp.value;
    var getpass = pass_inp.value;

    if (getemail == myemail && getpass == password) {
       window.location.href = "card.html"
    } else {
        alert("Password and Email is Incorrect")

        email_inp.style = "border-color: red; color: red";
        pass_inp.style = "border-color: red; color: red";
    }
}
