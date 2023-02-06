// navbar fixed
// window.onscroll = function () {
//   const navbar = document.getElementsByTagName("nav")[0];
//   const fixednav = header.offsetTop;

//   if (window.pageYOffset > fixednav) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// };

const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.add("nav-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.remove("nav-color");
  }
});

// function navtog() {
//   var element = document.getElementsByTagName("nav");
//   element.classList.toggle("bg-transparent");
// }
