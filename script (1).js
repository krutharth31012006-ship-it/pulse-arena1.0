document.addEventListener("DOMContentLoaded", () => {
    
    // NAVIGATION DECK VIEW ROUTING SYSTEM
    const navItems = document.querySelectorAll(".nav-item");
    const pageViews = document.querySelectorAll(".page-view");
    const navLogoBtn = document.getElementById("navLogoBtn");

    function switchView(targetViewId) {
        pageViews.forEach(view => {
            if (view.id === targetViewId) {
                view.classList.add("active");
            } else {
                view.classList.remove("active");
            }
        });

        navItems.forEach(item => {
            if (item.getAttribute("data-target") === targetViewId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetView = item.getAttribute("data-target");
            switchView(targetView);
        });
    });

    if (navLogoBtn) {
        navLogoBtn.addEventListener("click", () => switchView("store-view"));
    }

    // FEATURED CODES DATABASE (UP NEXT FEATURE CAROUSEL MOTOR)
    const featuredGames = [
        {
            title: "ECHOES OF TITAN",
            description: "At the edge of the known universe, a forgotten world is calling. Uncover its cosmic secrets, forge hidden alliances, and rewrite your story across an expansive open world.",
            genre: "Open-world RPG",
            badge: "OUT NOW",
            trending: "<i class='fa-solid fa-fire'></i> EDITOR'S PICK Trending #1",
            bgImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1500&q=80"
        },
        {
            title: "THE LAST RONIN",
            description: "In a bleak future Neo-Tokyo, the last remaining lone warrior embarks on a high-stakes quest for vengeance against the oppressive cyber-clans that took everything.",
            genre: "Action RPG • Coming Friday",
            badge: "COMING SOON",
            trending: "<i class='fa-solid fa-bolt'></i> MOST ANTICIPATED #1",
            bgImage: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&w=1500&q=80"
        },
        {
            title: "NEON OVERDRIVE",
            description: "Strap into hyper-engineered drift machine chassis and challenge global speeds. Race through gravity-defying circuit frameworks layered in rich synthwave aesthetics.",
            genre: "Racing • PC",
            badge: "LIVE NOW",
            trending: "<i class='fa-solid fa-trophy'></i> EXPANSION AVAILABLE",
            bgImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1500&q=80"
        }
    ];

    let currentHeroIndex = 0;
    const upNextWidget = document.getElementById("upNextWidget");
    const heroSection = document.getElementById("heroSection");
    const heroContent = document.getElementById("heroContent");

    const heroBadge = document.getElementById("heroBadge");
    const heroTrending = document.getElementById("heroTrending");
    const heroTitle = document.getElementById("heroTitle");
    const heroDesc = document.getElementById("heroDesc");
    const heroGenre = document.getElementById("heroGenre");

    const upNextImg = document.getElementById("upNextImg");
    const upNextTitle = document.getElementById("upNextTitle");
    const upNextMeta = document.getElementById("upNextMeta");

    // Initialize Hero entry layout triggers
    if (heroContent) {
        heroContent.classList.add("active-hero");
    }

    if (upNextWidget) {
        upNextWidget.addEventListener("click", () => {
            // Drop view state highlight class to kick start exit transitions
            heroContent.classList.remove("active-hero");

            setTimeout(() => {
                // Shift to downstream game indexes sequentially
                currentHeroIndex = (currentHeroIndex + 1) % featuredGames.length;
                const nextQueueIndex = (currentHeroIndex + 1) % featuredGames.length;

                const currentSelection = featuredGames[currentHeroIndex];
                const upNextSelection = featuredGames[nextQueueIndex];

                // Mutate core viewport elements smoothly
                heroSection.style.backgroundImage = `url('${currentSelection.bgImage}')`;
                heroBadge.textContent = currentSelection.badge;
                heroTrending.innerHTML = currentSelection.trending;
                heroTitle.textContent = currentSelection.title;
                heroDesc.textContent = currentSelection.description;
                heroGenre.innerHTML = currentSelection.genre;

                // Mutate subsequent preview metrics inside widget HUD
                upNextImg.src = upNextSelection.bgImage;
                upNextTitle.textContent = upNextSelection.title;
                upNextMeta.textContent = upNextSelection.genre;

                // Fire framework entrance animation hook
                heroContent.classList.add("active-hero");
            }, 300);
        });
    }

    // LIGHTBOX VIDEO MODAL LIGHTBOX
    const openTrailerBtn = document.getElementById("openTrailerBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const trailerModal = document.getElementById("trailerModal");

    function openModalDeck() {
        trailerModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeModalDeck() {
        trailerModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    if (openTrailerBtn) openTrailerBtn.addEventListener("click", openModalDeck);
    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModalDeck);

    window.addEventListener("click", (e) => {
        if (e.target === trailerModal) closeModalDeck();
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && trailerModal.classList.contains("active")) {
            closeModalDeck();
        }
    });

    // FILTER TABS HIGH LIGHT CLICK ENGINE
    const filterTabs = document.querySelectorAll(".tab");
    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
        });
    });

    // MOCK FEED LIKE TOGGLER MODULE
    const upvoteButtons = document.querySelectorAll(".action-pill:first-child");
    upvoteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("upvoted");
        });
    });
});