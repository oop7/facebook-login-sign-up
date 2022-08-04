function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";


     if (email.indexOf("@") == -1 || email.length < 12) {
        text = "please Enter true email";
        error.innerHTML = text;
        return false;
    }

    else if (password.length < 5 || password.length > 11) {
        text = "please Enter true password";
        error.innerHTML = text;
        return false;
    }

    else {
        alert("Done");
        return true;
    }

}   