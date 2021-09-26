function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "patient" && password == "patient123") {
        alert("Login successfully");
        window.location = "details.html";
        return false;
    }
    else {
        alert("Enter valid details : Refer Readme for password");

    }
}

function details() {
    var dname = document.getElementById("Pname").value;
    var dcontact = document.getElementById("Contact").value;
    var demail = document.getElementById("mail").value;
    var dspeciality = document.getElementById("spl").value;

    document.write('Name :' + dname + '<br>Contact:' + dcontact + '<br> Email:' + demail + '<br> Speciality: ' + dspeciality);
}

function dvalidate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "doctor" && password == "doctor123") {
        alert("Login successfully");
        window.location = "prescribe.html";
        return false;
    }
    else {
        alert("Enter valid details : Refer Readme for password");

    }
}

function prescribe() {
    var x = document.getElementById("ta").value;
    document.write("<h2> Prescription: <br> " + x + "</h2>");
}

function review() {
    var x = document.getElementById("pr").value;
    document.write("<h2> Review by Patient:  <br> " + x + "</h2>");
}