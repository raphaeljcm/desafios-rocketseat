const STATUS_MODAL = 'active';
const form = document.querySelector('form');

function modal() {
  document.querySelector('.modal-overlay').classList.toggle(STATUS_MODAL);
  document.querySelector('input#name').focus();
}

function cleanElements() {
  document.getElementById('name').value = '';
  document.getElementById('date').value = '';
  modal();
}

function submitHandler() {
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const date = document.getElementById('date');

    const valueName = name.value;
    const valueDate = new Date(`${date.value}:60`);

    countdownStart(valueName, valueDate);
    cleanElements();
  });
}

function countdownStart(name, date) {
  const spanDays = document.getElementById('days');
  const spanHours = document.getElementById('hours');
  const spanMinutes = document.getElementById('minutes');
  const spanSeconds = document.getElementById('seconds');

  // this later I will make the user tell me that through a form
  const countdownDate = date.getTime();
  console.log(countdownDate)
  
  const startcounter = setInterval(function() {
    const now = new Date().getTime();
    const timeleft = countdownDate - now;
    
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60))/ (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // displaying the output to users
    spanDays.innerHTML = days + ' :';
    spanHours.innerHTML = '&nbsp;' + hours + ' :';
    spanMinutes.innerHTML = '&nbsp;' + minutes + ' :';
    spanSeconds.innerHTML = '&nbsp;' + seconds;

    if(timeleft < 0) {
      clearInterval(startcounter);
      spanDays.innerHTML = '';
      spanHours.innerHTML = '';
      spanMinutes.innerHTML = '';
      spanSeconds.innerHTML = '';
      // create a function to display something when it's done
    }
  }, 1000);
}

function init() {
  submitHandler();
}

init();

// To do list:
/*
  Style my modal
  try catch on form
  effect when the lanch reach time with the name of the event displaing
  store the current time with localstorage
  change the date to datetime-local because datetime is no longer supported
*/