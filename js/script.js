var button = document.querySelector(".button");
var popup = document.querySelector(".search-modal");
var form = document.querySelector("form");
var checkIn = popup.querySelector("[name=date-check-in]");
var checkOut = popup.querySelector("[name=date-check-out]");
var adults = popup.querySelector("[name=number-of-adults]");
var children = popup.querySelector("[name=number-of-children]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.add("modal-close");
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    } else {
      popup.classList.add("modal-show");
      popup.classList.remove("modal-close");
    }
  checkIn.focus();
});

form.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth=popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.add("modal-close");
      popup.classList.remove("modal-error");
    }
  }
});
