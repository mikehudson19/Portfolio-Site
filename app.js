const hamburger = document.querySelector('.header__icon');


hamburger.addEventListener('click', () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div>
      <ul>
        <li>Work</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  `
  document.body.appendChild(container)
})