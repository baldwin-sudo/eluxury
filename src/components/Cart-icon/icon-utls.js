document.addEventListener("DOMContentLoaded", () => {
  const cart = document.querySelector(".icon-cart"); // Sélectionne un élément .icon-cart

  // Exemple de nombre que vous voulez afficher
  const number = cart.getAttribute("data-number"); // Récupère le nombre à partir de l'attribut data-number

  // Vous pouvez mettre à jour dynamiquement l'attribut data-number
  cart.setAttribute("data-number", number); // Réaffecte la même valeur ou mettez à jour selon votre logique
});
