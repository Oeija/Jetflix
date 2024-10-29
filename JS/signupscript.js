function validateForm(event) {
  event.preventDefault();
  form = document.getElementById("form");
  username = document.getElementById("username");
  password = document.getElementById("password");
  password2 = document.getElementById("password2");
  birth = document.getElementById("birth");
  male = document.getElementById("male");
  female = document.getElementById("female");
  agree = document.getElementById("agree");
  error = document.getElementById("error");

  if (username.value.length < 5) {
    error.innerHTML = "Username must be at least 5 characters!";
    alert("Username must be at least 5 characters!");
  } else if (!isAlphanumeric(password.value)) {
    error.innerHTML = "Password must be alphanumeric!";
    alert("Password must be alphanumeric!");
  } else if (password.value != password2.value) {
    error.innerHTML = "Password doesn't match!";
    alert("Password does not match!");
  } else if (birth.value === "") {
    error.innerHTML = "Date of birth must be filled!";
    alert("Date of birth must be filled!");
  } else if (!(male.checked || female.checked)) {
    error.innerHTML = "Gender must be picked!";
    alert("Gender must be picked!");
  } else if (!agree.checked) {
    error.innerHTML = "You must agree to the Terms & Conditions!";
    alert("You must agree to the Terms & Conditions!");
  } else {
    error.innerHTML = "";
    alert("Sign Up Success!");
    form.submit();
    window.location.href = "index.html";
  }
}

function isAlphanumeric(pw) {
  var num = false;
  var alpha = false;
  for (let i = 0; i < pw.length; i++) {
    if (!isNaN(pw[i])) {
      // isNaN = is Not a Number
      num = true;
    } else {
      alpha = true;
    }

    if (num && alpha) {
      return true;
    }
  }

  return false;
}
