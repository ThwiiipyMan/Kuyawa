// Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('[data-page]');
    const pages = document.querySelectorAll('.page');

    // Function to switch pages
    function switchPage(pageName) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show selected page
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click event to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            switchPage(pageName);
        });
    });

    // Set home as default page
    switchPage('home');
});

// Smooth scroll for buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        const page = e.target.getAttribute('data-page');
        if (page) {
            e.preventDefault();
            const targetPage = document.getElementById(page);
            if (targetPage) {
                targetPage.classList.add('active');
                document.querySelectorAll('.page').forEach(p => {
                    if (p !== targetPage) {
                        p.classList.remove('active');
                    }
                });
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
});

// Add animation on scroll for product cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});