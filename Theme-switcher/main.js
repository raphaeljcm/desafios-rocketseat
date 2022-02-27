function timeSwitcher() {
  const ball = document.getElementById('ball');

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