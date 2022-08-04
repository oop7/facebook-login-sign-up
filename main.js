function formValidatf() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var error = document.getElementById("error");
    var text = "";

if (username < 4) {
    text = "please Enter username more then 4";
    error.innerHTML = text;
    return false;
}
else if (email.index0f ("@" ==-1)  || email.length < 12 ) {
    text ="please Enter true email";
    error.innerHTML = text;
    return false;
}

else if (isNaN (tell) || tel.length == 11) {
    text ="please Enter true phone";
    error.innerHTML = text;
    return false;
}

else{
    alert("Done");
    return true;
}

}   