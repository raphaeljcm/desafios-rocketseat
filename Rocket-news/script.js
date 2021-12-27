const form = document.querySelector("form");

function formSent() {
  form.addEventListener("submit", e => {
    e.preventDefault();

    alert("Enviado!");
  });
}

formSent();