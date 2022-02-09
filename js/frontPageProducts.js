const url = "https://kea-alt-del.dk/t7/api/products?limit=8";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("a").href = `product.html?id=${product.id}`;

  clone.querySelector(
    ".product-card img"
  ).src = `https://kea-alt-del.dk/t7/images/jpg/640/${product.id}.jpg`;

  clone.querySelector(".product-card .product-list-brand").textContent =
    product.brandname;

  clone.querySelector(".product-card .product-list-price").textContent =
    product.price + " kr";

  clone.querySelector(".product-card .product-list-type").textContent =
    product.productdisplayname;

  const parent = document.querySelector(".products-list-container");
  parent.appendChild(clone);
}
