var popup = document.querySelector(".popup");
var menuButton = document.querySelector(".header__menu");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup__show");
});
