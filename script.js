
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.style.background = "rgba(15,23,42,0.9)";
    nav.style.padding = "15px";
    nav.style.borderRadius = "15px";
  } else {
    nav.style.background = "transparent";
  }
});
