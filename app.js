const hamburger = document.querySelector('.header__icon');


hamburger.addEventListener('click', () => {
  const container = document.createElement('div');
  container.classList.add('modal__container');
  container.innerHTML = `
    <div class="modal__menu">
    <span class="modal__close">+</span>
      <ul class="modal__list">
        <li class="modal__item"><a class="modal__link" href="#projects">Work</a></li>
        <li class="modal__item"><a class="modal__link" href="#contact">Contact</a></li>
        <li class="modal__item"><a class="modal__link" href="#about">About</a></li>
      </ul>
    </div>
  `
  document.querySelector('.modal').appendChild(container)
  const work = document.querySelectorAll('a.modal__link')[0];
  const contact = document.querySelectorAll('a.modal__link')[1];
  const about = document.querySelectorAll('a.modal__link')[2];



document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal__link') || e.target.classList.contains('modal__close')) {
    container.remove();
  } 
})

})

// Sticky Navbar
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('header--sticky', window.scrollY > 55);
})

