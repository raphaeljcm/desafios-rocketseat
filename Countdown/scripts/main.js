const STATUS_MODAL = 'active';
const form = document.querySelector('form');

function modal() {
  document.querySelector('.modal-overlay').classList.toggle(STATUS_MODAL);
  document.querySelector('input#name').focus();
}

const Form = {
  name: document.getElementById('name'),
  date: document.getElementById('date'),
  description: document.querySelector('#description').children[0],
  warningSpan: document.getElementsByClassName('warning')[0],

  getValues() {
    return {
      name: Form.name.value,
      date: Form.date.value
    }
  },

  clearFields() {
    this.name.value = '';
    this.date.value = '';
  },

  validateFields() {
    const { name, date } = Form.getValues();

    if(name.trim() === '' || date.trim() === '') {
      throw new Error("Please, fill in all fields.");
    }

    const dateFormat = new Date(date);
    const now = new Date().getTime();

    if(dateFormat === 'Invalid Date') {
      throw new Error("Please, choose a date.");
    } else if(dateFormat <= now) {
      throw new Error("Hey dude, the date cannot be before or equal to now");
    }
  },

  cancelButton() {
    Form.clearFields();
    modal();
  },

  submit() {
    form.addEventListener('submit', e => {
      e.preventDefault();

      try {
        Form.validateFields();

        const { name, date } = Form.getValues();
        const dateFormat = new Date(date);

        countdownStart(name, dateFormat);
        Form.description.textContent = 'READY TO LAUNCH IN...';
        Form.warningSpan.textContent = 'err.message';
        Form.warningSpan.style.display = 'none';
        Form.clearFields();
        modal();

      } catch(err) {
        Form.warningSpan.textContent = err.message;
        Form.warningSpan.style.display = 'inline';
      }
    });
  }
}

function countdownStart(name, date) {
  const spanDays = document.getElementById('days');
  const spanHours = document.getElementById('hours');
  const spanMinutes = document.getElementById('minutes');
  const spanSeconds = document.getElementById('seconds');

  const countdownDate = date.getTime();
  
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
      spanDays.innerHTML = '00 :';
      spanHours.innerHTML = '&nbsp;00 :';
      spanMinutes.innerHTML = '&nbsp;00 :';
      spanSeconds.innerHTML = '&nbsp;00';
      rocketTakeoff();
    }
  }, 1000);
}

function rocketTakeoff() {
  const rocket = document.querySelector('#rocket');
  const description = document.querySelector('#description').children[0];

  rocket.classList.add(STATUS_MODAL);
  description.textContent = 'Enjoy your event!';
}

function init() {
  Form.submit();
}

init();

// To do list:
/*
  find a way to reset my counter
  store the current time with localstorage
*/