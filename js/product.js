const url = "https://kea-alt-del.dk/t7/api/products/2200";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(
    ".product-details-container .product-brand"
  ).textContent = product.brandname;

  document.querySelector(
    ".product-details-container .product-name"
  ).textContent = product.productdisplayname;

  document.querySelector(
    ".product-details-container .product-price"
  ).textContent = product.price + " kr";

  document.querySelector(
    ".product-container img"
  ).src = `https://kea-alt-del.dk/t7/images/jpg/1000/${product.id}.jpg`;

  document.querySelector(".product-container img").alt =
    product.productdisplayname;

  document.querySelector(
    ".product-details-container .product-color"
  ).textContent = product.basecolour;
}
