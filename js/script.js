const searchInput = document.getElementById("search-input");
const productItems = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

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

searchInput.addEventListener("keyup", searchInputEvent);

buttons.forEach((button) => {
  button.addEventListener("click", filterButton);
});
