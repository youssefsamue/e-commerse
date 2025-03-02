const products = [
    { id: 1, name: "Smartphone", price: 299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR3R56BrmandQ3TgZ4Zz5MOKIcSjyZ2rr4w&s/150" },
    { id: 2, name: "Headphones", price: 99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCPiGsHLKkpsMhK5Rb90dn4HONTZwfAtAAw&s/150" },
    { id: 3, name: "Laptop", price: 799, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLnvH4jdYNa_GrhnsWVatTy5U62lvzzZySQ&s/150" },
];

const productContainer = document.getElementById("product-container");
const cartCount = document.getElementById("cart-count");

// Load cart from local storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Function to render products
function renderProducts() {
    productContainer.innerHTML = ""; // Clear container before rendering
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        
        // Check if the item is already in the cart
        const inCart = cart.find((item) => item.id === product.id);
        
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="btn" onclick="toggleCart(${product.id})">
                ${inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Function to add/remove items from the cart
function toggleCart(productId) {
    const product = products.find((item) => item.id === productId);
    const index = cart.findIndex((item) => item.id === productId);

    if (index === -1) {
        cart.push(product);
        alert(`${product.name} added to cart!`);
    } else {
        cart.splice(index, 1);
        alert(`${product.name} removed from cart!`);
    }

    // Save cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    renderProducts();
}

// Initialize products on page load
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartCount();
});


