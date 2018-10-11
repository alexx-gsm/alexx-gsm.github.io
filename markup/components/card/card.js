document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.onerror = () => {
            const title = img.getAttribute('title');
            img.parentNode.innerHTML = `<span class='no-image'>${title}</span>`;
        };
    });
});
