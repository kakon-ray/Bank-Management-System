const button = document.getElementById("button");
const UsserInput = document.getElementById("username");
const PasswordInput = document.getElementById("password");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (UsserInput.value && PasswordInput.value) {
    window.location.href = "home.html";
  }
});
