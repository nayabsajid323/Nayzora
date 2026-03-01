// Script for Nayzora Haven interactions

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        navbar.style.padding = '1rem 5%';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '1.5rem 5%';
    }
});
