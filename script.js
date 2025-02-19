let username = "Strojiccharlotte1011";
let password = "Charlotte10@";

let inputUsername = document.querySelector(".inputUsername");
let inputPassword = document.querySelector(".inputPassword");
let button = document.querySelector(".button");
let href = document.querySelector(".href");

button.addEventListener("click", function() {
      if (inputUsername.value === username && inputPassword.value === password) {
            alert("Welcome, Charlotte!");
            window.location.href = "/personalbanking/home.html";
            } else {
                  alert("Invalid username or password");
                  inputUsername.value = "";
                  inputPassword.value = "";
                  }
            });
            

                  

