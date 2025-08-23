function showsignup(){
  let signup = document.querySelector("#signup")

location.href = "./signup.html"
}

function showLogin(){
  let login = document.querySelector("#login")

location.href = "./login.html"
}


function signupform() {
  let getFullname = document.getElementById("name");
  let getEmail = document.getElementById("email");
  let getPassword = document.getElementById("password");

  localStorage.setItem("fullname", getFullname.value);
  localStorage.setItem("email", getEmail.value);
  localStorage.setItem("password", getPassword.value);

  window.location.href = './login.html';
}


function login() {
  let getemail = document.querySelector("#email1");
  let getPassword = document.querySelector("#password1");


  if (getemail.value === localStorage.getItem('email') && getPassword.value === localStorage.getItem('password')) {
    alert("Login success");
    window.location.href = "./index.html";
  } else {
    alert("Login failed");
  }
}


function karachi() {
  let btn = document.getElementById("#btn")
  window.location.href = './karachi.html';
}

function home() {
    window.location.href = './index.html';
  }



function filterItems() {
  // Get input value
  var input = document.getElementById("searchInput").value.toLowerCase();

  // Get all boxes in both sections
  var boxes = document.querySelectorAll(".main-itemscontainer, .main-itemscontainer1");

  // Loop through each box
  boxes.forEach(function(box) {
    // Get the <h4> text inside each box
    var title = box.querySelector("h4").textContent.toLowerCase();

    // Check if it matches input , The includes method checks if a specific value exists in:

    if (title.includes(input)) {
      box.style.display = "";
    } else {
      box.style.display = "none";
    }
  });
}



function lahore(){

  window.location.href = './lahore.html'

}

function monal() {
      window.location.href = './monal.html';
    }

function haveli(){
  window.location.href = './haveli.html'
} 

function buttkarahi(){
  window.location.href = './butt.html'
}

function johny(){
  window.location.href = './johny.html'
}

function forks(){
    window.location.href = './forks.html'
}
function xanders(){
  window.location.href = './xanders.html'
}


function del(){

  let delItems = document.querySelector('#delItems')
   delItems.innerHTML = ""  



function bbqpage() {
  window.location.href = './bbq.html';
}

function desicuisine(){
  window.location.href = './homekitchen.html' 
}
function burger(){
  window.location.href = './BurgerBliss.html'
}
function labella(){
  window.location.href = './italiano.html'
}
function biryani(){
  window.location.href = './biryani.html'
}
function hotnspicy(){
  window.location.href = './rolls.html'
}
function pizza(){
  window.location.href = './pizza.html'
}
function desserts(){
  window.location.href = './sweets.html'
}
function user(){
  window.location.href = './signup.html'
}
function karachi(){
  window.location.href = './karachi.html'
}
}



function savour(){
  window.location.href = './savour.html'
}

function ox(){
  window.location.href = './ox.html'
}

function streetcafe(){
  window.location.href = './street.html'
}


function leterraza(){
  window.location.href = './terraza.html'
}

function jessies(){
  window.location.href = './jessie.html'
}


function howdy(){
  window.location.href = './howdy.html'
}

function islamabad(){
  window.location.href = './islamabad.html'
}