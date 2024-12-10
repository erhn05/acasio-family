// JSON variable with multiple image entries
const shortcutData = [
    {
        "url": "http://facebook.com/",
        "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg",
        "alt": "Facebook"
    },
    {
        "url": "http://twitter.com/",
        "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Twitter_X.png/640px-Twitter_X.png",
        "alt": "Twitter"
    },
    {
        "url": "http://tumblr.com/",
        "imageSrc": "images/shortcuts/tumbler.png",
        "alt": "Tumblr"
    },
    {
        "url": "http://youtube.com/",
        "imageSrc": "images/shortcuts/youtube.png",
        "alt": "YouTube"
    },
    {
        "url": "http://google.com/",
        "imageSrc": "images/shortcuts/google.png",
        "alt": "Google"
    },
    {
        "url": "http://gmail.com/",
        "imageSrc": "images/shortcuts/gmail.png",
        "alt": "Gmail"
    },
    {
        "url": "http://yahoo.com/",
        "imageSrc": "images/shortcuts/yahoo.png",
        "alt": "Yahoo"
    },
    {
        "url": "#",
        "imageSrc": "images/shortcuts/online_video_converter.png",
        "alt": "Online Video Converter"
    },
    {
        "url": "http://mybiscast.com/",
        "imageSrc": "images/shortcuts/biscast_asteans.png",
        "alt": "Biscast Asteans"
    },
    {
        "url": "https://icloudph.com/biscast/sias/",
        "imageSrc": "images/shortcuts/biscast.png",
        "alt": "Biscast"
    },
    {
        "url": "#",
        "imageSrc": "images/shortcuts/subscript_superscript_converter.png",
        "alt": "Subscript Superscript Converter"
    },
    {
        "url": "https://www3.nhk.or.jp/nhkworld/en/live/",
        "imageSrc": "images/shortcuts/nhk_world_tv.jpg",
        "alt": "NHK World TV"
    }
];

// Get the container element where the images will be inserted
const shortcuts = document.getElementById('shortcuts');

// Loop through the shortcutData array and create each image
shortcutData.forEach(data => {
    // Create a link for each shortcut
    const shortcutLink = document.createElement('a');
    shortcutLink.href = data.url;
    shortcutLink.target = "_blank";

    // Create an <img> element
    const imgElement = document.createElement('img');
    imgElement.classList.add('shortcut-img');
    imgElement.src = data.imageSrc;
    imgElement.alt = data.alt;

    // Append the <img> element to the link
    shortcutLink.appendChild(imgElement);

    // Append the link to the shortcuts
    shortcuts.appendChild(shortcutLink);
});
