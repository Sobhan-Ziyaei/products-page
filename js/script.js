const searchInput = document.getElementById("search-input");
const productItems = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const price = document.getElementById("search-price").querySelector("button");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchInputEvent = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  productItems.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterButton = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);
  productItems.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "All") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const searchPrice = (event) => {
  const price = +event.target.parentElement.children[0].value;
  productItems.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const productPriceFilter = +productPrice.slice(1, productPrice.length);
    if (!price) {
      product.style.display = "block";
    } else {
      price === productPriceFilter
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

searchInput.addEventListener("keyup", searchInputEvent);
price.addEventListener("click", searchPrice);

buttons.forEach((button) => {
  button.addEventListener("click", filterButton);
});
