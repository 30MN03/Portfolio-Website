// window.addEventListener('scroll', function() {
//     const header = document.querySelector('.header');
//     const sidebar = document.querySelector('.sidebar');
//     if (window.scrollY > header.offsetHeight) {
//         header.classList.add('scrolled');
//         sidebar.style.left = "0"; // Show sidebar
//     } else {
//         header.classList.remove('scrolled');
//         sidebar.style.left = "-250px"; // Hide sidebar
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    function adjustPadding() {
        if (sidebar.classList.contains('sidebar-visible')) {
            document.body.classList.add('show-sidebar');
            container.classList.add('move-right');
        } else {
            document.body.classList.remove('show-sidebar');
            container.classList.remove('move-right');
        }
    }

    // Check sidebar visibility on page load
    adjustPadding();

    // Update padding when sidebar visibility changes
    document.addEventListener('scroll', adjustPadding);
});