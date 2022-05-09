let btnShow = document.querySelector('button');
let result = document.querySelector('h1');

btnShow.addEventListener('click', () => {
    let selected = document.querySelector('input[type="radio"]:checked');
    result.innerText = selected.parentElement.textContent;
});