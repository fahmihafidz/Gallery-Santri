let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("total");
  list.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
    list.appendChild(li);
  });
  totalDisplay.textContent = `Rp${total.toLocaleString()}`;
}
