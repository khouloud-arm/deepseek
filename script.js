// Données des produits
const products = [
    {
        id: 1,
        name: "Montre Connectée Elite",
        category: "tech",
        price: 199.99,
        oldPrice: 249.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Une montre intelligente avec suivi d'activité, moniteur de fréquence cardiaque et autonomie de 7 jours.",
        features: ["Écran AMOLED 1.4\"", "Résistant à l'eau 5ATM", "GPS intégré", "Notifications intelligentes"],
        rating: 4.5,
        reviews: 128,
        badge: "Promo"
    },
    {
        id: 2,
        name: "Écouteurs Pro Sound",
        category: "tech",
        price: 149.99,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Écouteurs sans fil avec réduction de bruit active et son haute définition. Jusqu'à 30 heures d'autonomie.",
        features: ["Réduction de bruit active", "Autonomie 30h", "Charge rapide", "Design ergonomique"],
        rating: 4.8,
        reviews: 95,
        badge: "Nouveau"
    },
    {
        id: 3,
        name: "Enceinte Bluetooth",
        category: "tech",
        price: 89.99,
        oldPrice: 119.99,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Haut-parleur portable résistant à l'eau avec son 360° et autonomie de 20 heures. Parfait pour les voyages.",
        features: ["Résistance IPX7", "Son 360°", "Autonomie 20h", "Design compact"],
        rating: 4.3,
        reviews: 64,
        badge: null
    },
    {
        id: 4,
        name: "Lampadaire Design",
        category: "home",
        price: 129.99,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Lampadaire moderne avec bras articulé et éclairage LED réglable. Idéal pour votre espace de lecture.",
        features: ["LED réglable", "Bras articulé", "Design scandinave", "Économie d'énergie"],
        rating: 4.6,
        reviews: 42,
        badge: "Best-seller"
    },
    {
        id: 5,
        name: "Sac à Dos Urbain",
        category: "fashion",
        price: 79.99,
        oldPrice: 99.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Sac à dos élégant et fonctionnel avec compartiment pour ordinateur portable et protection anti-vol.",
        features: ["Compartiment laptop 15\"", "Design anti-vol", "Matériau imperméable", "Poids léger"],
        rating: 4.4,
        reviews: 87,
        badge: "Eco-friendly"
    },
    {
        id: 6,
        name: "Montre de Sport",
        category: "sport",
        price: 159.99,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1533122250115-6bb28e9a48c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Montre de sport avec GPS intégré, moniteur de fréquence cardiaque et résistance à l'eau jusqu'à 100m.",
        features: ["GPS intégré", "Résistance 100m", "Moniteur FC", "Autonomie 10 jours"],
        rating: 4.7,
        reviews: 156,
        badge: "Nouveau"
    }
];

// Éléments DOM
const productsGrid = document.getElementById('productsGrid');
const productModal = document.getElementById('productModal');
const modalProduct = document.getElementById('modalProduct');
const closeModal = document.getElementById('closeModal');
const themeToggle = document.getElementById('themeToggle');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.querySelector('.search-bar input');

// État de l'application
let currentFilter = 'all';
let currentSearch = '';

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupEventListeners();
    checkSavedTheme();
});

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Thème
    themeToggle.addEventListener('click', toggleTheme);
    
    // Filtres
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            setActiveFilter(button, filter);
        });
    });
    
    // Recherche
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterProducts();
    });
    
    // Modal
    closeModal.addEventListener('click', () => {
        productModal.classList.remove('active');
    });
    
    // Fermer le modal en cliquant à l'extérieur
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('active');
        }
    });
}

// Rendu des produits
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${product.category}`;
        productCard.setAttribute('data-id', product.id);
        
        const ratingStars = getRatingStars(product.rating);
        
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-actions">
                    <button class="action-btn quick-view" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn add-wishlist" data-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    ${ratingStars}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <div class="price">
                        ${product.price.toFixed(2)} €
                        ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toFixed(2)} €</span>` : ''}
                    </div>
                    <button class="btn-cart add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i>
                        Ajouter
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Ajouter les écouteurs d'événements pour les boutons des produits
    document.querySelectorAll('.quick-view').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            openProductModal(productId);
        });
    });
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.add-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            addToWishlist(productId);
        });
    });
}

// Obtenir les étoiles de notation
function getRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Obtenir le nom de la catégorie
function getCategoryName(category) {
    const categories = {
        'tech': 'Technologie',
        'home': 'Maison',
        'fashion': 'Mode',
        'sport': 'Sport'
    };
    return categories[category] || category;
}

// Filtrer les produits
function filterProducts() {
    let filteredProducts = products;
    
    // Appliquer le filtre de catégorie
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
    }
    
    // Appliquer la recherche
    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentSearch) || 
            product.description.toLowerCase().includes(currentSearch)
        );
    }
    
    renderProducts(filteredProducts);
}

// Définir le filtre actif
function setActiveFilter(clickedButton, filter) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
    currentFilter = filter;
    filterProducts();
}

// Ouvrir le modal du produit
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const ratingStars = getRatingStars(product.rating);
    const featuresList = product.features.map(feature => `
        <li><i class="fas fa-check"></i> ${feature}</li>
    `).join('');
    
    modalProduct.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-info">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h2>${product.name}</h2>
            <div class="modal-price">
                ${product.price.toFixed(2)} €
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toFixed(2)} €</span>` : ''}
            </div>
            <div class="product-rating">
                ${ratingStars}
                <span>${product.rating} (${product.reviews} avis)</span>
            </div>
            <p class="modal-description">${product.description}</p>
            <div class="modal-features">
                <h3>Caractéristiques</h3>
                <ul>${featuresList}</ul>
            </div>
            <div class="modal-actions">
                <div class="quantity-selector">
                    <button class="quantity-btn minus"><i class="fas fa-minus"></i></button>
                    <span class="quantity">1</span>
                    <button class="quantity-btn plus"><i class="fas fa-plus"></i></button>
                </div>
                <button class="btn-modal-cart add-to-cart-modal" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    Ajouter au panier
                </button>
            </div>
        </div>
    `;
    
    // Ajouter les écouteurs d'événements pour le modal
    document.querySelector('.minus').addEventListener('click', decreaseQuantity);
    document.querySelector('.plus').addEventListener('click', increaseQuantity);
    document.querySelector('.add-to-cart-modal').addEventListener('click', () => {
        addToCart(productId);
    });
    
    productModal.classList.add('active');
}

// Gestion de la quantité
function decreaseQuantity() {
    const quantityElement = document.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
}

function increaseQuantity() {
    const quantityElement = document.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
}

// Ajouter au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = document.querySelector('.quantity') ? parseInt(document.querySelector('.quantity').textContent) : 1;
    
    // Animation du bouton
    const button = document.querySelector(`.add-to-cart[data-id="${productId}"]`) || 
                  document.querySelector('.add-to-cart-modal');
    
    if (button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
        button.style.background = 'var(--secondary-color)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }
    
    // Dans une vraie application, vous ajouteriez le produit au panier ici
    console.log(`Ajouté au panier: ${product.name} x${quantity}`);
    
    // Afficher une notification (optionnel)
    showNotification(`${product.name} ajouté au panier !`);
}

// Ajouter à la liste de souhaits
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const button = document.querySelector(`.add-wishlist[data-id="${productId}"]`);
    
    if (button) {
        button.innerHTML = '<i class="fas fa-heart" style="color: #e74c3c;"></i>';
        
        // Dans une vraie application, vous ajouteriez le produit à la liste de souhaits ici
        console.log(`Ajouté à la liste de souhaits: ${product.name}`);
        
        // Afficher une notification
        showNotification(`${product.name} ajouté aux favoris !`);
    }
}

// Afficher une notification
function showNotification(message) {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--secondary-color);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        transform: translateX(150%);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animation de sortie après 3 secondes
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Gestion du thème
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = themeToggle.querySelector('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function checkSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    }
}