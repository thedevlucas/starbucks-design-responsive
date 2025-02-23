// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Like button animation
const likeButton = document.querySelector('.like-button');
likeButton.addEventListener('click', function() {
    this.classList.add('liked');
    setTimeout(() => {
        this.classList.remove('liked');
    }, 1000);
});

// Parallax effect for floating elements
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) / 50;
    const moveY = (e.clientY - window.innerHeight / 2) / 50;

    document.querySelectorAll('.coffee-bean').forEach(bean => {
        bean.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 5}deg)`;
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? 'var(--primary-green)' : 'transparent';
});