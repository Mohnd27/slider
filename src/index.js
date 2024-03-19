let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
let exit = document.querySelector(".exit");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    navbar.style.right = "0";
  }
});
exit.addEventListener("click", () => {
  navbar.style.right = "-100%";
  menu.classList.remove("active");
});

// slide function

let slide_info = [
  {
    anime: "demon slayer",
    ch_name: "shinobu",
    ch_info:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ea totam cumque dolorem nulla laborum voluptate nihil! Debitis, vero nam!",
    image: "./src/images/shinobo-w.jpg",
    box_img1: "src/images/shinobo-1.jpg",
    box_img2: "src/images/shinobo-2.jpg",
  },
  {
    anime: "re zero",
    ch_name: "rem",
    ch_info:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ea totam cumque dolorem nulla laborum voluptate nihil! Debitis, vero nam!",
    image: "./src/images/rem-w.jpg",
    box_img1: "src/images/rem-1.jpg",
    box_img2: "src/images/rem.jpg",
  },
  {
    anime: "jujtsu kaisen",
    ch_name: "gojo satoru",
    ch_info:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ea totam cumque dolorem nulla laborum voluptate nihil! Debitis, vero nam!",
    image: "./src/images/gojo-w.jpg",
    box_img1: "src/images/gojo-1.jpg",
    box_img2: "src/images/gojo.jpg",
  },
];
let anime_n = document.querySelector("#anime");
let char_name = document.querySelector("#ch-name");
let char_info = document.querySelector("#ch-info");
let char_image = document.querySelector(".char_image");
let count = 1;
let slide_ul = document.querySelectorAll(".slides li");
let image_box = document.querySelectorAll(".box_img");
let name_box = document.querySelectorAll(".box-name");

function showSlide(n) {
  for (i = 0; i < slide_ul.length; i++) {
    slide_ul[i].classList.remove("active");
  }
  if (count < 1) {
    count = slide_info.length;
  }
  if (count > slide_info.length) {
    count = 1;
  }
  char_image.src = slide_info[count - 1].image;
  char_image.classList.remove("active");
  for (i = 0; i < image_box.length; i++) {
    image_box[i].classList.remove("active");
  }
  setTimeout(() => {
    char_image.classList.add("active");
    for (i = 0; i < image_box.length; i++) {
      image_box[i].classList.add("active");
    }
  }, 300);
  slide_ul[count - 1].classList.add("active");
  anime_n.innerHTML = slide_info[count - 1].anime;
  char_name.innerHTML = slide_info[count - 1].ch_name;
  char_info.innerHTML = slide_info[count - 1].ch_info;
  // for(i = 0;i < image_box.length;i++) {
  image_box[0].src = slide_info[count - 1].box_img1;
  image_box[1].src = slide_info[count - 1].box_img2;
  name_box[0].innerHTML = slide_info[count - 1].ch_name;
  name_box[1].innerHTML = slide_info[count - 1].ch_name;
}
showSlide(count);

function pushSlide(n) {
  showSlide((count += n));
}

function currentSlide(n) {
  showSlide((count = n));
}
