const page = document.querySelector('#page');
const menuPage = document.querySelector('#menu-page');
const btnMenuPage = document.querySelector('#menu-page-open');
const btnMenuClose = document.querySelector('#menu-page-close');

if (btnMenuPage) {
    btnMenuPage.addEventListener('click', e => {
        e.preventDefault();
        page.classList.add('show-menu');
    });
}

if (btnMenuClose) {
    btnMenuClose.addEventListener('click', e => {
        e.preventDefault();
        page.classList.remove('show-menu');
    });
}
