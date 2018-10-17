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

const btnModal = document.querySelector('#modal-open');
const modal = document.querySelector('.modal');

if (btnModal && modal) {
    btnModal.addEventListener('click', e => {
        e.preventDefault();
        modal.classList.add('is-show');
        modal
            .querySelector('.modal__background')
            .addEventListener('click', () => {
                modal.classList.remove('is-show');
            });
    });
}
