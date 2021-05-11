document.addEventListener("DOMContentLoaded", init());

function init() {
  document.querySelector("#year").innerHTML = new Date().getFullYear();
}
