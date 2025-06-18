document.querySelectorAll('.bi-star').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('clicked');
    });
});
document.querySelectorAll('.bi-bookmark-heart').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('clicked');
    });
});