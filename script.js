document.addEventListener('DOMContentLoaded', () => {
    // --- Data for games and apps ---
    const data = {
        games: [
            {
                slug: "warrenwalker",
                title: "@cymtm/Warrenwalker",
                description: "Experience the adventure with Warren Walker, an engaging interactive game experience.",
                imageUrl: "assets/game-warrenwalker.png",
                gameUrl: "games/warrenwalker/index.html",
            },
            {
                slug: "test",
                title: "Cross-Origin Isolation Test",
                description: "A test game that verifies cross-origin isolation, SharedArrayBuffer support, and modern web game APIs like pointer lock and fullscreen.",
                imageUrl: "assets/game-warrenwalker.png", // Reusing image
                gameUrl: "games/test/index.html",
            }
        ],
        apps: [
            {
                slug: "task-manager",
                title: "Task Manager Pro",
                description: "Organize your tasks and boost productivity with our intuitive task management application.",
                imageUrl: "assets/app-task-manager.png",
                appUrl: "apps/task-manager.html", // Placeholder URL
            },
            {
                slug: "color-picker",
                title: "Color Palette Generator",
                description: "Generate beautiful color palettes for your design projects with our advanced color picker tool.",
                imageUrl: "assets/app-color-picker.png",
                appUrl: "apps/color-picker.html", // Placeholder URL
            },
            {
                slug: "text-formatter",
                title: "Text Formatter",
                description: "Format and transform text with various tools including case conversion, word count, and more.",
                imageUrl: "assets/app-text-formatter.png",
                appUrl: "apps/text-formatter.html", // Placeholder URL
            }
        ]
    };

    // --- Mobile Navigation ---
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    if (mobileMenuButton && mobileNavLinks) {
        mobileMenuButton.addEventListener('click', () => {
            mobileNavLinks.classList.toggle('active');
        });
    }

    // --- Function to create item cards (for games/apps) ---
    const createItemCard = (item, type) => {
        const url = type === 'game' 
            ? `game-template.html?slug=${item.slug}` 
            : `app-template.html?slug=${item.slug}`;

        return `
            <a href="${url}" class="card item-card">
                <img src="${item.imageUrl}" alt="${item.title}">
                <div class="card-header">
                    <h3>${item.title}</h3>
                </div>
                <div class="card-content">
                    <p>${item.description}</p>
                </div>
            </a>
        `;
    };

    // --- Populate Grids ---
    const gamesGrid = document.getElementById('games-grid');
    if (gamesGrid) {
        gamesGrid.innerHTML = data.games.map(game => createItemCard(game, 'game')).join('');
    }

    const appsGrid = document.getElementById('apps-grid');
    if (appsGrid) {
        appsGrid.innerHTML = data.apps.map(app => createItemCard(app, 'app')).join('');
    }

    // --- Populate Game/App Template Pages ---
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    if (slug) {
        if (window.location.pathname.includes('game-template')) {
            const game = data.games.find(g => g.slug === slug);
            if (game) {
                document.title = `${game.title} - Legitimate Shed`;
                document.getElementById('game-title').textContent = game.title;
                document.getElementById('game-header-title').textContent = game.title;
                document.getElementById('game-description').textContent = game.description;
                document.getElementById('game-iframe').src = game.gameUrl;
                document.getElementById('open-in-new-tab').href = game.gameUrl;
            }
        } else if (window.location.pathname.includes('app-template')) {
             const app = data.apps.find(a => a.slug === slug);
             if(app) {
                document.title = `${app.title} - Legitimate Shed`;
                document.getElementById('app-title').textContent = app.title;
                document.getElementById('app-header-title').textContent = app.title;
                document.getElementById('app-description').textContent = app.description;
                document.getElementById('app-iframe').src = app.appUrl;
                document.getElementById('open-in-new-tab').href = app.appUrl;
             }
        }
    }
    
    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    const formToast = document.getElementById('form-toast');

    if (contactForm && formToast) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real static site, you'd integrate with a service like Formspree.
            // This is a simulation.
            formToast.textContent = "Thanks for reaching out! We'll get back to you soon.";
            formToast.className = 'toast';
            formToast.style.display = 'block';

            setTimeout(() => {
                formToast.style.display = 'none';
            }, 5000);

            contactForm.reset();
        });
    }

});