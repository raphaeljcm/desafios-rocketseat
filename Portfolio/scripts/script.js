function handleHovering() {
  const imgs = document.querySelectorAll(".img-external-link");

  imgs.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.setAttribute('src', './assets/external-link-icon-lighten.svg');
    });

    img.addEventListener('mouseleave', () => {
      img.setAttribute('src', './assets/external-link-icon.svg');
    });
  });
}

function init() {
  handleHovering();
}

init();