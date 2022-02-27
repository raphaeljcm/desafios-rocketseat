function timeSwitcher() {
  const ball = document.getElementById('ball');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // to know if the user has set his theme to dark on browser
  if(prefersDarkScheme.matches) {
    document.body.style.backgroundColor = '#292C35';
    ball.classList.add('moon');
  } else {
    document.body.style.backgroundColor = '#F1F1F1';
  }

  // to know if the user has set his theme to dark on android
  switch(getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK) {
    case Configuration.UI_MODE_NIGHT_YES:
      document.body.style.backgroundColor = '#292C35';
      ball.classList.add('moon');
      break;
    case Configuration.UI_MODE_NIGHT_NO:
      document.body.style.backgroundColor = '#F1F1F1';
      break;
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