const deposite = document.getElementById("deposite");
const withdrow = document.getElementById("withdrow");

const dbutton = document.getElementById("dbutton");
const wbutton = document.getElementById("wbutton");

const depositeDoller = document.getElementById("depositeDoller");
const withdrowDoller = document.getElementById("withdrowDoller");
const balanceDoller = document.getElementById("balanceDoller");

dbutton.addEventListener("click", () => {
  let inputValue = Number(deposite.value);
  let oldDepositeDoller = Number(depositeDoller.innerText);

  depositeDoller.innerText = inputValue + oldDepositeDoller;
  deposite.value = "";
  // Update Balance
  var totalDiposite = Number(balanceDoller.innerText);
  balanceDoller.innerText = totalDiposite + inputValue;
});

wbutton.addEventListener("click", () => {
  let withdrowValue = Number(withdrow.value);
  let oldWithDrow = Number(withdrowDoller.innerText);
  withdrowDoller.innerText = withdrowValue + oldWithDrow;
  withdrow.value = "";
  // Update Balance
  let balanceDollerValue = Number(balanceDoller.innerText);
  balanceDoller.innerText = balanceDollerValue - withdrowValue;
});
