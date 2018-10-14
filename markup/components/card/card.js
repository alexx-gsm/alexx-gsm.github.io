document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.onerror = () => {
            const title = img.getAttribute('title');
            img.parentNode.innerHTML = `<span class='no-image'>${title}</span>`;
        };
    });
});

const cards = document.querySelectorAll('.card');
if (cards) {
    cards.forEach(card => {
        const link = card.getAttribute('data-link');
        if (link) {
            card.addEventListener('click', e => {
                e.preventDefault();
                window.location.href = link;
            });
        }
    });
}
