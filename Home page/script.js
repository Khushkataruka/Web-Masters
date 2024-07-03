// script.js
document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const planetContainer = document.getElementById('planetContainer');
    const planet = document.querySelector('.planet');
    const planetWidth = planet.offsetWidth + 20; // Adjust for margin

    leftArrow.addEventListener('click', function () {
        planetContainer.scrollBy({
            left: -planetWidth,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function () {
        planetContainer.scrollBy({
            left: planetWidth,
            behavior: 'smooth'
        });
    });
});
