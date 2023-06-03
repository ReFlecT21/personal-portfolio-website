var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var circleFill = scrollToTopBtn.querySelector(".circle-fill");
var fullHeight = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function() {
  var scrollPosition = window.pageYOffset;
  var scrollPercentage = (scrollPosition / fullHeight) * 100;
  var strokeOffset = 100 - Math.min(scrollPercentage, 100);

  scrollToTopBtn.style.transform = scrollPosition > 100 ? "scale(1)" : "scale(0)";
  circleFill.style.strokeDashoffset = strokeOffset;
});

scrollToTopBtn.addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



window.addEventListener("scroll", function() {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});



