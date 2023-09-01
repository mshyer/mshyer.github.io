const hamburger = document.querySelector('.hamburger');
const sibling = hamburger.nextElementSibling;

hamburger.addEventListener('click', (e) => {
    sibling.classList.contains('show') ? 
        sibling.classList.remove('show') :
        sibling.classList.add('show');
})

sibling.addEventListener('click', () => {
    sibling.classList.remove('show');
});