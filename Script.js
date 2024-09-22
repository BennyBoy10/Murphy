

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
  // Check if email is valid
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





