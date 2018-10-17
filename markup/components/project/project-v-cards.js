const vCards = document.querySelectorAll('.card--v');

if (vCards) {
    const extraClass =
        vCards.length % 3 === 1
            ? 'last-single'
            : vCards.length % 3 === 2
                ? 'last-double'
                : '';
    const addClass = vCards.length % 2 === 0 ? 'last-odd' : 'last-even';
    vCards[0].parentElement.classList.add(extraClass, addClass);

    // vCards[0].parentElement.classList.add(addClass);
}
