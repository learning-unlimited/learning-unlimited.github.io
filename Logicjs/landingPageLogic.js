function loadComponent(path, id, callback) {
  fetch(path)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

loadComponent("./Components/Navbar.html", "navbar", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

loadComponent("./Components/HeroSection.html", "hero-section");
loadComponent("./Components/About.html", "about-section");
loadComponent("./Components/Luworking.html", "working-lu");
loadComponent("./Components/Lustartchapter.html", "start-chapter");

loadComponent("./Components/Footer.html", "footer" , ()=>{
  
  let insertDate = document.getElementById("getfullyear");

  if (insertDate) {
    insertDate.textContent = new Date().getFullYear();
  }
});