// JavaScript to toggle the menu
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        const mainContent = document.querySelector('main');

        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            mainContent.style.marginTop = '0';
        } else {
            navLinks.classList.add('nav-active');
            mainContent.style.marginTop = navLinks.offsetHeight + 'px';
        };
    };

// JavaScript to show/hide the Back to Top button
var backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
    if (this.window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// JavaScript to scroll back to the top
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});