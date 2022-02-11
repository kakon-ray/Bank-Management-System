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
  var totalDiposite = Number(depositeDoller.innerText);
  let balanceInputValue = Number(deposite.value);
  let balanceDollerInnerText = Number(balanceDoller.innerText);
  balanceDoller.innerText = balanceInputValue + totalDiposite;
});

wbutton.addEventListener("click", () => {
  let withdrowValue = Number(withdrow.value);
  let oldWithDrow = Number(withdrowDoller.innerText);
  withdrowDoller.innerText = withdrowValue + oldWithDrow;
  withdrow.value = "";
  let totalWithDrow = Number(withdrowDoller.innerText);
  let balanceDollerValue = Number(balanceDoller.innerText);
  balanceDoller.innerText = balanceDollerValue - totalWithDrow;
});
