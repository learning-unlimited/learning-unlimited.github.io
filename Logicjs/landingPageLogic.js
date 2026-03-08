function loadComponent(path, id) {
  fetch(path)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("./Components/Navbar.html", "navbar");
loadComponent("./Components/HeroSection.html", "hero-section");
loadComponent("./Components/About.html", "about-section");
loadComponent("./Components/Luworking.html", "working-lu");
loadComponent("./Components/Lustartchapter.html", "start-chapter");
loadComponent("./Components/Footer.html", "footer");


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let insertDate = document.getElementById("getfullyear");

insertDate.textContent = new Date().getFullYear();