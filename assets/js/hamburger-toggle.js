const ham = document.getElementById('ham');
const menu = document.getElementById('menu');
const about = document.getElementById('js-about');
const contact = document.getElementById('js-contact');

function toggleClicked() {
  ham.classList.toggle('clicked');
  menu.classList.toggle('clicked');
};

ham.addEventListener('click', () => {
  toggleClicked();
});

about.addEventListener('click', () =>{
  toggleClicked();
});

contact.addEventListener('click', () => {
  toggleClicked();
});