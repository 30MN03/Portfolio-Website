window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const sidebar = document.querySelector('.sidebar');
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('scrolled');
        sidebar.style.left = "0"; // Show sidebar
    } else {
        header.classList.remove('scrolled');
        sidebar.style.left = "-250px"; // Hide sidebar
    }
});

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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Here you can implement your logic for form submission (e.g., sending data to a server)

    // For demonstration purposes, let's just log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    alert('Message sent successfully!');
});
