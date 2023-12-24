const searchInput = document.getElementById("search-input");
const productItems = document.querySelectorAll(".product-item");

const searchInputEvent = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  console.dir(searchValue);

  productItems.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

searchInput.addEventListener("keyup", searchInputEvent);
