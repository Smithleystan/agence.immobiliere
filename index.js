const menu = document.querySelector(".mainmenu");
const btnmenu = document.querySelector("#btnmenu");

if (window.matchMedia("(max-width: 500px)").matches) {
  menu.style.display = "none";
} else {
}
// btnmenu.addEventListener("click", btnclick);

// const btnclick = () => {
//   let i = 0;
//   while (i < 1) {
//     menu.style.display = "flex";
//     i++;
//     break;
//   }
//   if((i = 1)) {
//     menu.style.display = "none";
//     i = 0;
//     break;
//   }
// };

const styleGenerator = () => {
  btnmenu.classList.toggle;
};

const btnclick = () => {
  if (menu.style.display == "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
};
btnmenu.addEventListener("click", btnclick);

document
  .querySelector("#btnmenu")
  .animate([{ transform: "SlideIn(1.1)" }, { duration: 1000 }]);

// const animation = () => {

// }
// btnmenu.addEventListener("click", animation);
