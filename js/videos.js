const videos = [
    {
        "title": "Opening Prayer",
        "src": "https://drive.google.com/file/d/1t3O5y2x1BLHLdc9lpXjZD36JwhHbNDAe/preview"
    },
	{
        "title": "Family Video 2025",
        "src": "https://drive.google.com/file/d/1xAUXl_fBrXGp1IfLCrgmCvtZw3cTwJYl/preview"
    },
    {
        "title": "Pasko Na Sinta Ko by Niel Andrew Acasio",
        "src": "https://drive.google.com/file/d/19jhdtJLWx4tGD4P1WIGhHazX8gTn9kis/preview"
    },
    {
        "title": "Christmas 2020",
        "src": "https://drive.google.com/file/d/1VhunpAWpqA0aIWJAbJKKadLs3xGEDGxc/preview"
    },
    {
        "title": "Guess the Drawing 01",
        "src": "https://drive.google.com/file/d/10eKfmiWYur7p4xIt-i170N9g64urwuza/preview"
    },
    {
        "title": "Guess the Drawing 02",
        "src": "https://drive.google.com/file/d/1JPPZl-nSLMrPr6AM9Fe3YTzBSAVxhYk1/preview"
    },
    {
        "title": "Guess the Drawing 03",
        "src": "https://drive.google.com/file/d/10xpJq5yx8guspgS9pvEBDykQyPsdHqFa/preview"
    },
    {
        "title": "Guess the Drawing 04",
        "src": "https://drive.google.com/file/d/1gKW00a532y-WnqoW2tH4kfplKC8So_74/preview"
    },
    {
        "title": "Family Video 2024",
        "src": "https://drive.google.com/file/d/1gMxx0p5-u9Z-mICbjaAaz1YD2iJkLoL6/preview"
    }
]

// Populate the video controls
controlCounter = 0
videos.forEach(video => {
    controlCounter++;

    const controlDiv = `
        <div class="control" data-src="${video.src}">
            ${controlCounter}
        </div>
    `;
    document.getElementById('video-controls').innerHTML += controlDiv;
});

window.addEventListener('DOMContentLoaded', () => {
    const controls = document.querySelectorAll('.control');
    const videoFrame = document.getElementById('video-frame');
    const currentUrl = new URL(window.location.href);
    const videoIndex = parseInt(currentUrl.searchParams.get('video')) || 1; // Default to 1 if no video param
    
    // Set the video source and style the correct control
    const selectedControl = controls[videoIndex - 1];
    if (selectedControl) {
        videoFrame.src = selectedControl.getAttribute('data-src') + `?video=${videoIndex}`;
        selectedControl.classList.add('selected');
    }

    // Add click event listeners to controls
    controls.forEach((control, index) => {
        control.addEventListener('click', () => {
            const newSrc = control.getAttribute('data-src') + `?video=${index + 1}`;
            videoFrame.src = newSrc;

            // Remove 'selected' class from all controls
            controls.forEach(ctrl => ctrl.classList.remove('selected'));

            // Add 'selected' class to the clicked control
            control.classList.add('selected');

            // Update the URL in the address bar
            currentUrl.searchParams.set('video', index + 1);
            window.history.replaceState(null, '', currentUrl);
        }); 
    });
});
