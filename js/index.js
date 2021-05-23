const hola = document.getElementById("submit-btn");
const register = document.getElementById("register");
const offers = document.getElementById("offers");
const header = document.getElementById("header");
const hover = document.getElementById("hover-all");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const reciver = document.getElementById("reciver");
const refresh = document.getElementById("refresh");
const bestPrice = document.getElementById("best-prices");
const footerMain = document.querySelector("footer");

hola.addEventListener("click", (e) => {
  e.preventDefault();
  register.classList.add("display-none");
  offers.classList.add("display-none");
  header.classList.add("display-none");
  footerMain.classList.add("display-none");
  bestPrice.classList.add("display-none");
  reciver.innerHTML = `Gracias ${fname.value.bold()} por registrarse le enviaremos un correo electronico a la siguiente direccion ${email.value.bold()}`;
  hover.classList.remove("display-none");
  hover.classList.add("hover-all");
});

refresh.addEventListener("click", (e) => {
  location.reload();
});
