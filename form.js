function validateForm() {
  const Name = document.getElementById('name')
  const email = document.getElementById('email')
  const form = document.getElementById('form')
  const message = document.getElementById('message')

  var error1 = true;
  var error2 = true;
  var error3 = true;
  var error4 = true;


  if (Name == "" || Name === "null") {
    document.getElementById("error1").innerHTML = "Please enter your first name.";
  }
  else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(FirstName) === false) {
      document.getElementById("error1").innerHTML = "Please enter a valid first name. ";
    }
    else {
      document.getElementById("error1").innerHTML = "";
      error1 = false;
    }
  }

  if (email == "" || email === "null") {
    document.getElementById("error3").innerHTML = "Please enter your Email.";
  }

  else {
    var atpos = EMail.indexOf("@");
    var dotpos = EMail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= EMail.length) {
      document.getElementById("error3").innerHTML = "Please enter a valid Email.";
    }

    else {
      document.getElementById("error3").innerHTML = "";
      error3 = false;
    }
  }

  if (message == "" || message === "null") {
    document.getElementById("error4").innerHTML = "Please enter your Comments.";
  }
  else {
    document.getElementById("error4").innerHTML = "";
    error4 = false;
  }

  if (errorMessages1 == true) {
    return false;
  }
  if (errorMessages2 == true) {
    return false;
  }
  if (errorMessages3 == true) {
    return false;
  }
  if (errorMessages4 == true) {
    return false;
  }
}


