const button = document.getElementById("button");
const UsserInput = document.getElementById("username");
const PasswordInput = document.getElementById("password");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    UsserInput.value == "kakon@gmail.com" &&
    PasswordInput.value === "12345"
  ) {
    window.location.href = "home.html";
  }
});
