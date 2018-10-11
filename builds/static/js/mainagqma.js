'use strict';

var page = document.querySelector('#page');
var menuPage = document.querySelector('#menu-page');
var btnMenuPage = document.querySelector('#menu-page-open');
var btnMenuClose = document.querySelector('#menu-page-close');

if (btnMenuPage) {
    btnMenuPage.addEventListener('click', function (e) {
        e.preventDefault();
        page.classList.add('show-menu');
    });
}

if (btnMenuClose) {
    btnMenuClose.addEventListener('click', function (e) {
        e.preventDefault();
        page.classList.remove('show-menu');
    });
}
'use strict';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img').forEach(function (img) {
        img.onerror = function () {
            var title = img.getAttribute('title');
            img.parentNode.innerHTML = '<span class=\'no-image\'>' + title + '</span>';
        };
    });
});