const cardButton = document.querySelector('#card_button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cardButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

function toggleModal(){
	modal.classList.toggle("is_open");
}

new WOW().init();