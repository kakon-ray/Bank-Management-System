const deposite = document.getElementById("deposite");
const withdrow = document.getElementById("withdrow");

const dbutton = document.getElementById("dbutton");
const wbutton = document.getElementById("wbutton");

const depositeDoller = document.getElementById("depositeDoller");
const withdrowDoller = document.getElementById("withdrowDoller");
const balanceDoller = document.getElementById("balanceDoller");

// Handle Diposite
dbutton.addEventListener("click", () => {
  let inputValue = Number(deposite.value);
  if (typeof inputValue == "number" && inputValue >= 1) {
    let oldDepositeDoller = Number(depositeDoller.innerText);

    depositeDoller.innerText = inputValue + oldDepositeDoller;
    deposite.value = "";
    // Update Balance
    var totalDiposite = Number(balanceDoller.innerText);
    balanceDoller.innerText = totalDiposite + inputValue;
  } else {
    document.getElementById("error").innerText = "Please Enter Number";
  }
});
// Handle withdrow
wbutton.addEventListener("click", () => {
  let withdrowValue = Number(withdrow.value);
  if (typeof withdrowValue == "number" && withdrowValue >= 1) {
    let oldWithDrow = Number(withdrowDoller.innerText);
    withdrowDoller.innerText = withdrowValue + oldWithDrow;
    withdrow.value = "";
    // Update Balance
    let balanceDollerValue = Number(balanceDoller.innerText);
    balanceDoller.innerText = balanceDollerValue - withdrowValue;
  } else {
    document.getElementById("error").innerText = "Please Enter Number";
  }
});
