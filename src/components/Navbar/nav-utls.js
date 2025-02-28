document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne tous les éléments avec la classe "nav-item"
  const navItems = document.querySelectorAll(".nav-item");

  // Ajoute un écouteur d'événement "click" à chaque élément
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => {
        nav.classList.remove("selected-nav-item");
      });
      item.classList.add("selected-nav-item"); // Alterne la classe CSS
    });
  });
});
