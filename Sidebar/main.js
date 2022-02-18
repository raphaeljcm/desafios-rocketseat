function menuToggle() {
  const main = document.getElementsByTagName('main')[0];
  const menuButton = document.querySelector('.toggle-button');
  const searchInput = document.querySelector('.search input');
  const searchDiv = document.querySelector('.search');

  menuButton.addEventListener('click', () => {
    main.classList.toggle('active');
  });

  // try to solve this tomorrow
  // searchInput.addEventListener('focus', () => {
  //   console.log('op', searchDiv)
  //   searchDiv.style.width = '14.8rem';
  // });
}

menuToggle();