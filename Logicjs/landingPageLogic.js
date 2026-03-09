const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

let insertDate = document.getElementById("getfullyear");

if (insertDate) {
  insertDate.textContent = new Date().getFullYear();
}

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
