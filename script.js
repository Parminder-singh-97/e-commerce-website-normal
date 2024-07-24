// hover on bar links ---------

let links = document.querySelectorAll("#navbar li .link");

links.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.classList.add("active");
  });

  e.addEventListener("mouseout", () => {
    e.classList.remove("active");
  });
});

// Script for navigation bar









//script for sproduct image change  event

let small_img = document.querySelectorAll(".small_img");

small_img.forEach((img) => {
  img.addEventListener("click", () => {
    let main_image = document.getElementById("main_image");
    main_image.src = img.src;
  });
});
