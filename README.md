Galerie de Produits Premium
Une galerie de produits moderne et élégante avec fonctionnalités avancées, développée en HTML, CSS et JavaScript.

✨ Fonctionnalités
🎨 Interface Utilisateur
Design moderne avec animations fluides

Thème clair/sombre avec basculement automatique

Interface responsive adaptée à tous les appareils

Effets de survol sophistiqués sur les cartes produits

🔍 Fonctionnalités Produits
Galerie de 6 produits organisés par catégories

Filtrage par catégories (Technologie, Maison, Mode, Sport)

Recherche en temps réel dans les produits

Modal détaillé pour chaque produit

Système de notation avec étoiles

Badges produits (Promo, Nouveau, Best-seller, Eco-friendly)

🛒 Fonctionnalités Interactives
Ajout au panier avec confirmation visuelle

Liste de souhaits (favoris)

Sélecteur de quantité dans le modal

Notifications toast pour les actions utilisateur

⚡ Performances
Chargement rapide avec animations optimisées

Stockage local pour la préférence de thème

Code modulaire et bien structuré

🚀 Installation
Méthode 1 : Téléchargement direct
Téléchargez les trois fichiers :

index.html

styles.css

script.js

Placez-les dans le même dossier

Ouvrez index.html dans votre navigateur

Méthode 2 : Clonage du dépôt
bash
git clone <url-du-depot>
cd galerie-produits
open index.html
📁 Structure des fichiers
text
galerie-produits/
│
├── index.html          # Structure principale de la page
├── styles.css          # Styles CSS avec variables et thèmes
└── script.js           # Logique JavaScript et interactions
🎯 Utilisation
Navigation principale
Utilisez les boutons de filtre en haut pour trier par catégorie

Tapez dans la barre de recherche pour trouver des produits spécifiques

Cliquez sur le bouton 🌙/☀️ pour basculer entre les thèmes

Interactions produits
Survolez une carte pour voir les animations

Cliquez sur l'œil 👁️ pour voir les détails du produit

Cliquez sur le cœur ❤️ pour ajouter aux favoris

Cliquez sur "Ajouter" pour mettre dans le panier

Modal produit
Affiche les images, descriptions et caractéristiques détaillées

Permet de modifier la quantité avant ajout au panier

Fermez avec la croix ✖️ ou en cliquant à l'extérieur

🛠️ Personnalisation
Ajouter de nouveaux produits
Modifiez le tableau products dans script.js :

javascript
{
    id: 7,
    name: "Nouveau Produit",
    category: "tech",
    price: 99.99,
    oldPrice: 129.99,
    image: "url-de-l-image",
    description: "Description du produit",
    features: ["Caractéristique 1", "Caractéristique 2"],
    rating: 4.5,
    reviews: 50,
    badge: "Nouveau"
}
Modifier les couleurs
Éditez les variables CSS dans styles.css :

css
:root {
    --primary-color: #votre-couleur;
    --secondary-color: #votre-couleur;
    --accent-color: #votre-couleur;
    /* ... */
}
Ajouter des catégories
Ajoutez un bouton dans le HTML

Mettez à jour la fonction getCategoryName() dans script.js

🌙 Thème sombre
Le thème sombre est automatiquement sauvegardé dans le localStorage du navigateur. Les utilisateurs retrouvent leur préférence à chaque visite.

📱 Responsive Design
La galerie s'adapte automatiquement à :

Ordinateurs (1200px+)

Tablettes (768px - 1199px)

Mobile (< 768px)

🎨 Technologies utilisées
HTML5 - Structure sémantique

CSS3 - Styles modernes avec variables CSS

JavaScript ES6+ - Interactivité avancée

Font Awesome - Icônes vectorielles

Google Fonts - Typographie (via CDN)

📦 Dépendances
Font Awesome 6.4.0 (via CDN)

Images depuis Unsplash (via CDN)

🔧 Compatibilité
✅ Chrome 90+

✅ Firefox 88+

✅ Safari 14+

✅ Edge 90+

📝 Notes de développement
Architecture du code
Séparation claire HTML/CSS/JS

Variables CSS pour une maintenance facile

Code modulaire avec fonctions réutilisables

Gestion d'état simple et efficace

Performances
Images optimisées depuis Unsplash

Animations CSS pour de meilleures performances

Chargement différé des composants

🐛 Résolution de problèmes
Les produits ne s'affichent pas
Vérifiez que script.js est bien chargé

Contrôlez la console navigateur pour les erreurs

Le thème ne se sauvegarde pas
Vérifiez que les cookies sont activés

Le localStorage doit être supporté par le navigateur

Problèmes d'affichage mobile
Vérifiez la balise viewport dans le HTML

Testez avec les outils de développement navigateur

📄 Licence
Ce projet est open source et disponible sous licence MIT.

🤝 Contribution
Les contributions sont les bienvenues ! N'hésitez pas à :

Fork le projet

Créer une branche feature

Commiter vos changements

Push sur la branche

Ouvrir une Pull Request

📞 Support
Pour toute question ou problème :

Vérifiez la documentation

Consultez les issues existantes

Créez une nouvelle issue si nécessaire

Développé avec ❤️ pour démontrer les capacités modernes du front-end

