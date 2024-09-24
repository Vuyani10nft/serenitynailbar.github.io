let lastScrollTop = 0; // Track last scroll position
const header = document.querySelector('.header'); // Change to your header class

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.top = "-100px"; // Adjust this value to your header height
    } else {
        // Scrolling up
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
