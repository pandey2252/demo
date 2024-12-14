// script.js

// Add an event listener to change the subtitle text
document.getElementById('changeTextButton').addEventListener('click', () => {
    const subtitle = document.querySelector('.subtitle');
    subtitle.textContent = "Discover something new every day!";
});









// Array of demo ads
const ads = [
    `<a href="https://example.com" target="_blank">
        <img src="https://via.placeholder.com/300x150?text=Ad+1" alt="Ad 1">
     </a>`,
    `<a href="https://anotherexample.com" target="_blank">
        <img src="https://via.placeholder.com/300x150?text=Ad+2" alt="Ad 2">
     </a>`,
    `<a href="https://yetanotherexample.com" target="_blank">
        <img src="https://via.placeholder.com/300x150?text=Ad+3" alt="Ad 3">
     </a>`
];

// Change ad content on button click
document.getElementById('changeAdButton').addEventListener('click', () => {
    const adSpace = document.getElementById('ad-space');
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    adSpace.innerHTML = randomAd;
});
