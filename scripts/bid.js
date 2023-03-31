let popup = document.querySelector(".popup-wrapper");
let popupForm = document.querySelector(".popup-form");
let popupBtn = document.querySelectorAll(".popup-open");
let popupClose = document.querySelector(".close-btn");

popupBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault;
        showPopup();
      });          
});

popupClose.addEventListener("click", (e) => {
  e.preventDefault;
  removePopup();
});

popupForm.addEventListener("submit", () => {
  removePopup();
});

popup.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("popup-wrapper")) {
    removePopup();
  } else return;
});

function showPopup() {
  popup.classList.add("active");
  var element = document.getElementById("all");
  element.click();
}

function removePopup() {
  popup.classList.remove("active");
}