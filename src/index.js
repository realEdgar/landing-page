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

const buttons = [];
buttons.push(document.getElementById('product')); // Button Product
buttons.push(document.getElementById('company')); // Button Company
buttons.push(document.getElementById('connect')); // Button Connect

const $list__product = document.getElementById('product__list'); // List Product
const $list__company = document.getElementById('company__list'); // List Company
const $list__connect = document.getElementById('connect__list'); // List Connect

// Adding listeners to the buttons on the modal

buttons.forEach(button => {
  button.addEventListener('click', showList);
})

function showList(ev) {
  if(ev.target.id == 'product') {
    if($list__product.style.display == 'block') {
      $list__product.style.display = "none";
      ev.target.children[0].style.transform = 'rotate(0deg)';
      ev.target.children[1].style.transform = 'rotate(0deg)';
      buttons[1].addEventListener('click', showList)
      buttons[2].addEventListener('click', showList)
    } else {
      $list__product.style.display = "block";
      ev.target.children[0].style.transform = 'rotate(180deg)';
      ev.target.children[1].style.transform = 'rotate(180deg)';
      
      buttons[1].removeEventListener('click', showList);
      buttons[2].removeEventListener('click', showList);
    }
  }
  if(ev.target.id == 'company'){
    if($list__company.style.display == 'block') {
      $list__company.style.display = "none";
      ev.target.children[0].style.transform = 'rotate(0deg)';
      ev.target.children[1].style.transform = 'rotate(0deg)';
      buttons[0].addEventListener('click', showList)
      buttons[2].addEventListener('click', showList)
    } else {
      $list__company.style.display = "block";
      ev.target.children[0].style.transform = 'rotate(180deg)';
      ev.target.children[1].style.transform = 'rotate(180deg)';
      buttons[0].removeEventListener('click', showList);
      buttons[2].removeEventListener('click', showList);
    }
  }
  if(ev.target.id == 'connect'){
    if($list__connect.style.display == 'block') {
      $list__connect.style.display = "none";
      ev.target.children[0].style.transform = 'rotate(0deg)';
      ev.target.children[1].style.transform = 'rotate(0deg)';
      buttons[0].addEventListener('click', showList)
      buttons[1].addEventListener('click', showList)
    } else {
      $list__connect.style.display = "block";
      ev.target.children[0].style.transform = 'rotate(180deg)';
      ev.target.children[1].style.transform = 'rotate(180deg)';
      buttons[0].removeEventListener('click', showList);
      buttons[1].removeEventListener('click', showList);
    }
  }
}
