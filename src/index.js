const $header__button = document.querySelector('.head__nav'); // Button to show and hind the modal
const $button__menu = document.querySelector('.head__menu'); // Image hamburger menu
const $button__close = document.querySelector('.head__close'); // Image close modal
$header__button.addEventListener('click', showModal);

// Function to show and hind the Modal
function showModal(ev) {
    if(ev.target.className == "head__menu") {
        $button__menu.style.display = "none";
        $button__close.style.display = "block";
    } else {
        $button__menu.style.display = "block";
        $button__close.style.display = "none"
    }    
}