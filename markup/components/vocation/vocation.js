const input = document.querySelector('.inputfile');

if (input) {
    const label = input.nextElementSibling;
    const labelVal = label.innerHTML;

    input.addEventListener('change', e => {
        const fileName = e.target.value.split('\\').pop();

        if (fileName) {
            label.querySelector('span').innerHTML = fileName;
            input.classList.remove('no-file');
            document
                .querySelector('label + .label-remove')
                .addEventListener('click', e => {
                    e.preventDefault();
                    e.stopPropagation();
                    input.value = '';
                    label.innerHTML = labelVal;
                    input.classList.add('no-file');
                });
        } else {
            label.innerHTML = labelVal;
            input.classList.add('no-file');
        }
    });
}
