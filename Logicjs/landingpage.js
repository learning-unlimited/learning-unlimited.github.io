const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let insertDate = document.getElementById("getfullyear");

insertDate.textContent = new Date().getFullYear();