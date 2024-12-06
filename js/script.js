// Head content
const headContent = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acasio Family</title>
<link rel="icon" href="images/favicon.png" type="image/png">
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
`;
document.head.innerHTML += headContent;

// Header content
const headerContent = `
<header>
    <div class="logo-container">
        <img src="images/logo.png" alt="Logo" class="logo">
        <div class="text-container">
            <span class="site-name">Acasio Family</span>
            <span class="site-phrase">Home is where our heart is.</span>
        </div>
    </div>
    <nav>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="games.html">Games</a></li>
        </ul>
        <div class="hamburger">
            &#9776;
        </div>
    </nav>
</header>
`;
document.getElementById('header-container').innerHTML = headerContent;

// Get the header height dynamically
const header = document.querySelector('header');
const navLinks = document.querySelector('nav .nav-links');

// Get the current page's filename
const currentPage = window.location.pathname.split('/').pop();
const navLinksItems = document.querySelectorAll('nav .nav-links a');

// Loop through each link to check if it matches the current page
navLinksItems.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop(); // Get the file name from href
    if (linkPage === currentPage) {
        link.classList.add('active'); // Add 'active' class if it matches
    }
});

// Hamburger menu toggle for dropdown
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    // Set the dropdown position dynamically based on the header height
    if (navLinks.classList.contains('show')) {
        const headerHeight = header.offsetHeight; // Get the height of the header
        navLinks.style.top = `${headerHeight}px`; // Set the top position of the dropdown
    } else {
        navLinks.style.top = ''; // Reset top position when hidden
    }
});
