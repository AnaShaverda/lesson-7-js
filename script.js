// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch");
//     }
//     return response.json();
//   })
//   .then((data) => console.log("data", data))
//   .catch((error) => console.log(error));

console.log("start");

setTimeout(() => {
  console.log("this runs later");
}, 2000);

console.log("end");

async function getData() {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`response status : ${response.status}`);
    }
    const result = await response.json();
    displayProducts(result);
  } catch (error) {
    console.error(error);
  }
}

getData();

const productDiv = document.getElementById("productDiv");

function displayProducts(products) {
  products.forEach((product) => {
    const productList = document.createElement("div");
    productList.innerHTML = `
        <h2 class="title">${product["title"]}</h2>
        <h2>${product.price}</h2>
        <p>${product.description}</p>
        <p>${product.category}</p>
        <img src="${product.image}" alt="${product.title}" />
    `;
    productDiv.appendChild(productList);
  });
}

const arr = [3, 45, 34, 5435, 435];

arr.forEach((element) => {
  console.log(element);
});
