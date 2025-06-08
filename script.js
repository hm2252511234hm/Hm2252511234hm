
const products = [
  { id: 1, name: "T-shirt", price: 15, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Casquette", price: 10, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Chaussures", price: 30, image: "https://via.placeholder.com/200" }
];

let cart = [];

function updateCart() {
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = total + '€';
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const item = cart.find(p => p.id === productId);
  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

function loadProducts() {
  const container = document.getElementById('product-list');
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}€</p>
      <button onclick="addToCart(${product.id})">Ajouter au panier</button>
    `;
    container.appendChild(div);
  });
}

loadProducts();

