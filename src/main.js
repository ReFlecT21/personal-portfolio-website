// animate nav and header-text after (before-header-text) animation
// const box =document.getElementById("before-header-text");
// var element=document.getElementById("yo");
// var element1=document.getElementById("nav");

// box.addEventListener("animationend",()=>{

//     element.classList.add("active");
//     element1.classList.add("active");

// });

// makes skills-tab functional
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// function to make skill-tab functional and have the animation of skill circles activate
function somFunc() {
  opentab("skills");
  letnumplay();
}

// activate skill circle animation only when you scroll past it
var triggerElement = document.getElementById("skills");
var triggerPosition = triggerElement.getBoundingClientRect().top;
var windowHeight = window.innerHeight;

function handleScroll() {
  var scrollPosition = window.scrollY;

  if (scrollPosition >= triggerPosition - windowHeight + 200) {
    let py = document.getElementById("py");
    let sql = document.getElementById("SQL");
    let php = document.getElementById("PHP");
    let html = document.getElementById("HTML");
    let css = document.getElementById("CSS");
    let js = document.getElementById("JAVASCRIPT");

    letnumplay();
    py.classList.add("selected");
    sql.classList.add("selected");
    php.classList.add("selected");
    html.classList.add("selected");
    css.classList.add("selected");
    js.classList.add("selected");

    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);

// animates the percentages in skill circle
function letnumplay() {
  let number = document.getElementById("python");
  let counter = 0;
  setInterval(() => {
    if (counter == 90) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, 10);
  let number2 = document.getElementById("sql");
  let counter2 = 0;
  setInterval(() => {
    if (counter2 == 85) {
      clearInterval();
    } else {
      counter2 += 1;
      number2.innerHTML = counter2 + "%";
    }
  }, 10);
  let number3 = document.getElementById("php");
  let counter3 = 0;
  setInterval(() => {
    if (counter3 == 90) {
      clearInterval();
    } else {
      counter3 += 1;
      number3.innerHTML = counter3 + "%";
    }
  }, 10);
  let number4 = document.getElementById("html");
  let counter4 = 0;
  setInterval(() => {
    if (counter4 == 80) {
      clearInterval();
    } else {
      counter4 += 1;
      number4.innerHTML = counter4 + "%";
    }
  }, 11);
  let number5 = document.getElementById("css");
  let counter5 = 0;
  setInterval(() => {
    if (counter5 == 70) {
      clearInterval();
    } else {
      counter5 += 1;
      number5.innerHTML = counter5 + "%";
    }
  }, 12);
  let number6 = document.getElementById("javascript");
  let counter6 = 0;
  setInterval(() => {
    if (counter6 == 80) {
      clearInterval();
    } else {
      counter6 += 1;
      number6.innerHTML = counter6 + "%";
    }
  }, 11);
}

// gives burger icon functionality
const nav = document.getElementById("nav");
const ul = document.querySelector("nav ul");
const barsIcon = document.querySelector(".fa-bars");
const xmarkIcon = document.querySelector(".fa-xmark");

barsIcon.addEventListener("click", function () {
  nav.classList.toggle("active1");
});

xmarkIcon.addEventListener("click", function () {
  nav.classList.remove("active1");
});
function dropmenu() {
  var menu = document.getElementById("dropmenu");
  var check = document.getElementById("checkbox");

  if (check.checked) {
    menu.style.display = "block";
    menu.classList.add("drop");
  } else {
    menu.classList.remove("drop");
    menu.style.animation = "growUp 400ms ease-in-out forwards";
    setTimeout(function () {
      menu.style.display = "none";
      menu.style.animation = "";
    }, 400);
  }
}
