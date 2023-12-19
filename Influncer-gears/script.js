const menuList = document.getElementById("menu-list");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuList.style.right = "-250px";

menuBtn.onclick = function () {
  if (menuList.style.right == "-250px") {
    menuList.style.right = "0";
    menu.src = "./images/close.png";
  } else {
    menuList.style.right = "-250px";
    menu.src = "./images/menu.png";
  }
};

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// menuBtn.addEventListener("click", () => {
//   console.log("clicked");

// });
