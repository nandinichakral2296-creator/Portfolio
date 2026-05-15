
document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
  sections.forEach(section=>{
    const top = window.scrollY;
    const offset = section.offsetTop - 300;

    if(top > offset){
      section.style.opacity = "1";
      section.style.transform = "translateY(0px)";
    }
  })
});

sections.forEach(section=>{
  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = "all 0.8s ease";
});
