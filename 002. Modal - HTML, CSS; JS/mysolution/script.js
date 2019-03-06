"use strict";
const detail = document.querySelectorAll(".openModal");
detail.forEach(btn => btn.addEventListener("click", showModal));
document.querySelector("#modal_container").style.display = "none";

console.log(detail);

function showModal() {
  document.querySelector("#modal_container").style.display = "flex";
  document.querySelector("#closebutton").addEventListener("click", hideModal);
  console.log("working");
  console.log("Show modal");
}
function hideModal() {
  document.querySelector("#modal_container").style.display = "none";
  console.log("Hide modal");
}
