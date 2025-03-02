const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

// Load cart from local storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render cart items
function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        checkoutBtn.style.display = "none";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" width="50">
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    totalPriceElement.textContent = total;
    checkoutBtn.style.display = "block";
}

// Function to remove an item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Redirect to payment page
checkoutBtn.addEventListener("click", () => {
    window.location.href = "payment.html";
});

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", renderCart);
