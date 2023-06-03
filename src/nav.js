let navbar = document.getElementById("nav");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("nav").offsetHeight;

let navbarLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  navbarLinks.forEach(link => {
    
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= scrollpos + 70 &&
        section.offsetTop + section.offsetHeight > scrollpos + 70) {
      link.classList.add("active");
      if(link.innerHTML=="About"){
        navbar.classList.add("sticky")
      }
      if(link.innerHTML=="Home"){
        navbar.classList.remove("sticky")
      }
      
    } else {
      link.classList.remove("active");
    }
  });
});
