let bell = document.querySelector("#bell");

bell.addEventListener("click", function () {
  let img = bell.querySelector("img");

  if (this.classList.contains("ringed")) {
    this.classList.remove("ringed");
    img.src = "./assets/bell-outline.svg";
  } else {
    this.classList.add("ringed");
    img.src = "./assets/bell-ring-outline.svg";
  }
});
