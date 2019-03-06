window.addEventListener("load", cookiesLoad);
let cookiebox = document.querySelector("[data-anime=down]");
//cookiebox.style.display = "none";
const animationClass = "animate";

function cookiesLoad(event) {
  console.log(event);
  cookiebox.classList.add(animationClass);
  const x = document.querySelector("#closeCookieConsent");
  const okBtn = document.querySelector("#ok");
  x.addEventListener("click", () => {
    cookiebox.classList.remove(animationClass);
  });
  okBtn.addEventListener("click", () => {
    cookiebox.classList.remove(animationClass);
  });
}
