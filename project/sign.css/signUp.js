let password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// let formContainer = document.getElementsByClassName("pure-form")
// formContainer.onsubmit(function(e) {
//   e.preventDefault();
// })

function signUpBtn() {
  let getListUsername = localStorage.getItem("username")
  let getListPassword = localStorage.getItem("password")
  console
  let userName = document.getElementById("userName").value
  let password = document.getElementById("password").value
  let listPassword = []
  let listUserName = []
  console.log(listUserName)
  console.log(listPassword)
  console.log(password)
  listUserName.push(userName)
  listPassword.push(password)
  localStorage.setItem("username", JSON.stringify(listUserName))
  localStorage.setItem("password", JSON.stringify(listPassword))
}