function timeSwitcher() {
  const ball = document.getElementById('ball');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if(prefersDarkScheme.matches) {
    document.body.style.backgroundColor = '#292C35';
    ball.classList.add('moon');
  } else {
    document.body.style.backgroundColor = '#F1F1F1';
  }

  ball.addEventListener('click', () => {
    ball.classList.toggle('moon');

    const attr = ball.getAttribute('class');

    if(attr.includes('moon')) {
      document.body.style.backgroundColor = '#292C35';
    } else {
      document.body.style.backgroundColor = '#F1F1F1';
    }
  });
}




timeSwitcher();