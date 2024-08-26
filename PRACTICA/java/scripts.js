document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.ulNav');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});





















// Selección de elementos del DOM
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');
const cartButton = document.getElementById('cart-button');
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const loginButton = document.getElementById('login-button');

// Estado inicial del carrito
let cart = [];

// Función para togglear el menú móvil
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
});

// Funcionalidad de añadir al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
    });
});

function addToCart(productId) {
    cart.push(productId);
    updateCartCount();
    alert('Producto añadido al carrito');
}

function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Funcionalidad de login básica
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const userEmail = prompt('Ingrese su correo electrónico:');
    if (userEmail) {
        alert(`Bienvenido, ${userEmail}!`);
    }
});

// Funcionalidad de búsqueda
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        // Lógica de búsqueda (puedes implementar según tus necesidades)
        alert(`Buscando: ${query}`);
    }
});