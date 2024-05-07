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

// const product = {
//   name: '',
//   price: '',
//   quantity: 0,
//   totalPrice: 0,
// };

const CART = {
  count: 0,

  load:function(){
      //pull from localstorage
  },
  add: function (number) {
    if (number == 0) {
      alert("Enter a valid number");
      return;
    }
    
    const productName = document.querySelector(".sneakerName").innerText;
    const productPrice = document.querySelector(".discountPrice").innerText;
    const productQuantity = parseInt(document.querySelector(".count").innerText);
    const productTotalPrice = parseFloat(productPrice.replace("$", "")) * productQuantity;
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cartItems.findIndex(item => item.name === productName);
    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity and total price
      cartItems[existingProductIndex].quantity += productQuantity;
      cartItems[existingProductIndex].totalPrice += productTotalPrice;
    }else {
      cartItems.push({
        name: productName,
        price: productPrice,
        quantity: productQuantity,
        totalPrice: productTotalPrice

      })
    } 

    localStorage.setItem("cart", JSON.stringify(cartItems));
    this.count += productQuantity;
    this.render();
    alert("Item added to cart!");
    count = 0;
    updateCount();
  },

  render: function () {
    if (localStorage.getItem("cart") == undefined){
      document.querySelector(".numberOfProduct").innerText = 0;
      return;
    }
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    document.querySelectorAll(".numberOfProduct").forEach((element) => {
      element.innerText = cartItems[0].quantity;
    });
    document.querySelector(".sneakerNameForCart").innerText = cartItems[0].name;
    document.querySelector(".price").innerText = cartItems[0].price;
    document.querySelector(".totalPrice").innerText = "$" + cartItems[0].totalPrice;
  },

  deleteCart: function () {
    localStorage.removeItem("cart");
    this.count = 0;
    CART.render();
    cartProductList();
    // JSON.parse(localStorage.getItem("cart")).quantity = 0;
    
  }
};

function getCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function cartPage(n) {
  var cartOverlay = document.getElementById("cartOverlay");
  cartOverlay.style.display =
    cartOverlay.style.display === "block" ? "none" : "block";
}

function cartProductList() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartItems.length === 0 || cartItems === undefined) {
      productList.style.display = "none";
    } else {
      productList.style.display = "flex";
    }

}


function saveCartItems(cartItems) {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function addToCart(item) {
  let cartItems = getCartItems();
  cartItems.push(item);
  saveCartItems(cartItems);
}



window.onload=()=>{

  CART.render();
};