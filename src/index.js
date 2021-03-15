const $header__button = document.querySelector('.head__nav'); // Button to show and hind the modal
const $button__menu = document.querySelector('.head__menu'); // Image hamburger menu
const $button__close = document.querySelector('.head__close'); // Image close modal
const $modal = document.querySelector('.modal__container'); // Modal
$header__button.addEventListener('click', showModal);

// Function to show and hind the Modal
function showModal(ev) {
    if(ev.target.className == "head__menu") {
        $button__menu.style.display = "none";
        $modal.style.display = "block"
        //Show modal
        $button__close.style.display = "block"; 
    } else {
        $button__menu.style.display = "block";
        $button__close.style.display = "none";
        // Hide Modal
        $modal.style.display = "none"
    }
}

// Interaction on the modal

const $button__product = document.getElementById('product'); // Button Product
const $button__company = document.getElementById('company'); // Button Company
const $button__connect = document.getElementById('connect'); // Button Connect

const $list__product = document.getElementById('product__list'); // List Product
const $list__company = document.getElementById('company__list'); // List Company
const $list__connect = document.getElementById('connect__list'); // List Connect

// Adding listeners to the buttons on the modal

$button__product.addEventListener('click', showList);
$button__company.addEventListener('click', showList);
$button__connect.addEventListener('click', showList);

function showList(ev) {
    console.log(ev)
    switch(ev.target.id) {
        case 'product':
            if($list__product.style.display == 'none') {
              $list__product.style.display = "block";
              ev.target.children[0].style.transform = 'rotate(180deg)';
            } else {
              $list__product.style.display = "none";
              ev.target.children[0].style.transform = 'rotate(0deg)';
            }            
        break;
        case 'company':
            if($list__company.style.display == 'none') {
                $list__company.style.display = "block";
                ev.target.children[0].style.transform = 'rotate(180deg)';
              } else {
                $list__company.style.display = "none";
                ev.target.children[0].style.transform = 'rotate(0deg)';
              } 
        break;
        case 'connect':
            if($list__connect.style.display == 'none') {
                $list__connect.style.display = "block";
                ev.target.children[0].style.transform = 'rotate(180deg)';
              } else {
                $list__connect.style.display = "none";
                ev.target.children[0].style.transform = 'rotate(0deg)';
              } 
        break;
    }
}

console.log($button__product, $button__connect, $button__company);
console.log($list__product, $list__connect, $list__company);