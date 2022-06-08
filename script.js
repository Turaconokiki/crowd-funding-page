let menuBar = document.getElementById("openMenu");

menuBar.addEventListener("click", () => {
  if (menuBar.getAttribute("src") === "./images/icon-hamburger.svg") {
    menuBar.setAttribute("src", "./images/icon-close-menu.svg");
    document.getElementById("modal").style.display = "block";
    document.getElementById("mobileLinks").style.display = "block";
  } else {
    menuBar.setAttribute("src", "./images/icon-hamburger.svg");
    document.getElementById("modal").style.display = "none";
    document.getElementById("mobileLinks").style.display = "none";
  }
});

window.addEventListener("click", (event) => {
  if (
    event.target === document.getElementById("modal") ||
    event.target === document.getElementsByTagName("header")[0]
  ) {
    menuBar.setAttribute("src", "./images/icon-hamburger.svg");
    document.getElementById("modal").style.display = "none";
    document.getElementById("mobileLinks").style.display = "none";
  }
});

// For the Bookmark Button

document.querySelector("#bookmark-button").addEventListener("click", () => {
  let bookmark = document.querySelector("#bookmark-button");
  bookmark.classList.toggle("active");
  let bookmarkText = document.querySelector("#bookmark__text").textContent;
  bookmarkText === "Bookmark"
    ? (document.querySelector("#bookmark__text").textContent = "Bookmarked")
    : (document.querySelector("#bookmark__text").textContent = "Bookmark");
});

// for the popup menu

document.querySelector(".top__one").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "block";
});

document.querySelector(".popup__close").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === document.querySelector(".popup")) {
    document.querySelector(".popup").style.display = "none";
  }
});