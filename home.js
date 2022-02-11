const deposite = document.getElementById("deposite");
const withdrow = document.getElementById("withdrow");

const dbutton = document.getElementById("dbutton");
const wbutton = document.getElementById("wbutton");

const depositeDoller = document.getElementById("depositeDoller");
const withdrowDoller = document.getElementById("withdrowDoller");
const balanceDoller = document.getElementById("balanceDoller");

function error() {
  document.getElementById("error").innerText = "Please Enter Number";
}

function noError() {
  document.getElementById("error").innerText = "";
}

function addDoller(inputValue, dWDoller, dwInput) {
  let depositeWithdroDollerNum = Number(dWDoller.innerText);
  dWDoller.innerText = inputValue + depositeWithdroDollerNum;
  dwInput.value = "";
  return dWDoller.innerText;
}

// Handle Diposite
dbutton.addEventListener("click", () => {
  let inputValue = Number(deposite.value);
  if (typeof inputValue == "number" && inputValue >= 1) {
    addDoller(inputValue, depositeDoller, deposite);
    // Update Balance
    var totalDiposite = Number(balanceDoller.innerText);
    balanceDoller.innerText = totalDiposite + inputValue;
    noError();
  } else {
    error();
  }
});

// Handle withdrow
wbutton.addEventListener("click", () => {
  let withdrowValue = Number(withdrow.value);
  if (typeof withdrowValue == "number" && withdrowValue >= 1) {
    addDoller(withdrowValue, withdrowDoller, withdrow);

    // Update Balance
    let balanceDollerValue = Number(balanceDoller.innerText);
    balanceDoller.innerText = balanceDollerValue - withdrowValue;
    noError();
  } else {
    error();
  }
});
