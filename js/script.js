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
    </nav>
</header>
`;
document.getElementById('header-container').innerHTML = headerContent;

// Add 'active' class to the corresponding link based on the current page
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});