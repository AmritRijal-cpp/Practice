const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const navBranding = document.querySelector(".navBranding");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBranding.classList.toggle("active");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
});

document.body.appendChild(overlay);

document.querySelectorAll(".navItems").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBranding.classList.remove("active");
    overlay.style.display =
      overlay.style.display === "block" ? "none" : "block";
  })
);

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

const displayCount = document.querySelector(".count");

function activeImage(n) {
  document.querySelector(".mainImage").src = `images/image-product-${n}.jpg`;
}

function activeBorder(borderIndex) {
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("selected");
  });

  thumbnails[borderIndex - 1].classList.add("selected");
  document.querySelectorAll(".selected").forEach((element) => {
    element.style.background = "hsla(0, 0%, 100%, 0.5)";
  });
}

let index = 1;
function nextVisibility() {
  if (index === 4) {
    document.querySelector(".next").style.display = "none";
  } else {
    document.querySelector(".next").style.display = "inline-block";
  }
}

function previousVisibility() {
  if (index === 1) {
    document.querySelector(".previous").style.display = "none";
  } else {
    document.querySelector(".previous").style.display = "inline-block";
  }
}

function next() {
  index++;
  document.querySelector(
    ".mainImage"
  ).src = `images/image-product-${index}.jpg`;
  nextVisibility();
  previousVisibility();
}

function previous() {
  index--;
  document.querySelector(
    ".mainImage"
  ).src = `images/image-product-${index}.jpg`;
  nextVisibility();
  previousVisibility();
}

previousVisibility();

let count = 0;

function updateCount() {
  displayCount.innerText = count;
}

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateCount();
});

plus.addEventListener("click", () => {
  count++;
  updateCount();
});
