document.addEventListener('DOMContentLoaded', () => {
    // --- Data for games and apps ---
    const data = {
        games: [
            {
                slug: "warrenwalker",
                title: "Warrenwalker",
                description: "Our flagship browser game. Launching soon.",
                imageUrl: "assets/warrenwalker-card.svg",
                gameUrl: "games/warrenwalker/index.html",
                comingSoon: true,
            }
        ],
        apps: [
            // No apps yet – add here when ready.
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
        const isComingSoon = Boolean(item.comingSoon);
        const url = type === 'game'
            ? `game-template.html?slug=${item.slug}`
            : `app-template.html?slug=${item.slug}`;

        const inner = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="card-header">
                <h3>${item.title}</h3>
            </div>
            <div class="card-content">
                <p>${item.description}</p>
                ${isComingSoon ? '<span class="badge">Coming soon</span>' : ''}
            </div>
        `;

        if (isComingSoon) {
            return `<div class="card item-card disabled">${inner}</div>`;
        }

        return `<a href="${url}" class="card item-card">${inner}</a>`;
    };

    // --- Populate Grids ---
    const gamesGrid = document.getElementById('games-grid');
    if (gamesGrid) {
        if (data.games.length === 0) {
            gamesGrid.innerHTML = `<div class="card"><div class="card-content"><p>No games are listed yet.</p></div></div>`;
        } else {
            gamesGrid.innerHTML = data.games.map(game => createItemCard(game, 'game')).join('');
        }
    }

    const appsGrid = document.getElementById('apps-grid');
    if (appsGrid) {
        if (data.apps.length === 0) {
            appsGrid.innerHTML = `<div class="card"><div class="card-content"><p>No apps yet. Check back later.</p></div></div>`;
        } else {
            appsGrid.innerHTML = data.apps.map(app => createItemCard(app, 'app')).join('');
        }
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

                const iframe = document.getElementById('game-iframe');
                const openBtn = document.getElementById('open-in-new-tab');

                if (game.comingSoon) {
                    // Hide iframe and show coming soon message in its container
                    if (iframe && iframe.parentElement) {
                        iframe.parentElement.innerHTML = '<p class="text-center">This game is launching soon. Check back later.</p>';
                    }
                    if (openBtn) openBtn.style.display = 'none';
                } else {
                    iframe.src = game.gameUrl;
                    openBtn.href = game.gameUrl;
                }
            } else {
                // Slug not found
                const container = document.querySelector('main .container') || document.querySelector('main');
                if (container) {
                    container.innerHTML = '<div class="card"><div class="card-content"><p>Game not found.</p><a href="games.html" class="button">Back to Games</a></div></div>';
                }
            }
        } else if (window.location.pathname.includes('app-template')) {
             const app = data.apps.find(a => a.slug === slug);
             if(app) {
                document.title = `${app.title} - Legitimate Shed`;
                document.getElementById('app-title').textContent = app.title;
                document.getElementById('app-header-title').textContent = app.title;
                document.getElementById('app-description').textContent = app.description;
                 const iframe = document.getElementById('app-iframe');
                 const openBtn = document.getElementById('open-in-new-tab');
                 if (app.comingSoon) {
                     if (iframe && iframe.parentElement) {
                         iframe.parentElement.innerHTML = '<p class="text-center">This app is coming soon. Check back later.</p>';
                     }
                     if (openBtn) openBtn.style.display = 'none';
                 } else {
                     iframe.src = app.appUrl;
                     openBtn.href = app.appUrl;
                 }
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