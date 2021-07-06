const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const homepage = document.querySelector('.homepage-content');
menuBtn.onclick = () => {
  navbar.classList.add('show');
  menuBtn.classList.add('hide');
  body.classList.add('disabled');
};
cancelBtn.onclick = () => {
  body.classList.remove('disabled');
  navbar.classList.remove('show');
  menuBtn.classList.remove('hide');
};
window.onscroll = () => {
  this.scrollY > 50
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};
window.onscroll = () => {
  this.scrollY > 50
    ? homepage.classList.add('display-none')
    : homepage.classList.remove('display-none');
};

// ----------Section homepage---------

var video = document.getElementById('myVideo');
var btn = document.getElementById('myBtn');

function myVideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = 'Pause';
  } else {
    video.pause();
    btn.innerHTML = 'Play';
  }
}

var i = 0;
var txt =
  "Hello! I'm Andrei Stavar. Junior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages includin Javascript, SQL, and C.Strong background in project management and customer relations";
var speed = 10; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// --------------------Section portofolio---------------------------------------------

// Rock Paper Scissor Game

let userScore = 0;
let computerScore = 0;
const display = document.getElementById('display');
const rock = document.getElementById('rock');
console.log(rock);
const paper = document.getElementById('p');
const scissor = document.getElementById('s');
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

function getComputerChoise() {
  const choises = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choises[randomNumber];
}

function game(userChoice) {
  const computerChoise = getComputerChoise();
  switch (userChoice + computerChoise) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoise);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoise);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoise);
      break;
  }

  function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
  }

  function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    display.innerHTML =
      'Player picked:  ' +
      convertToWord(userChoice) +
      '<br />' +
      'Computer picked: ' +
      convertToWord(computerChoice) +
      '<br />' +
      'Result: User wins!';
  }

  function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    display.innerHTML =
      'Player picked:  ' +
      convertToWord(userChoice) +
      '<br />' +
      'Computer picked: ' +
      convertToWord(computerChoice) +
      '<br />' +
      'Result: Computer wins!';
  }

  function draw(userChoice, computerChoice) {
    display.innerHTML =
      'Player picked:  ' +
      convertToWord(userChoice) +
      '<br />' +
      'Computer picked: ' +
      convertToWord(computerChoice) +
      '<br />' +
      'Result: Its a draw!';
  }
}
game();

function main() {
  rock.addEventListener('click', () => game('r'));
  paper.addEventListener('click', () => game('p'));
  scissor.addEventListener('click', () => game('s'));
}

main();
// ------------function weather------------------
function weather(unit) {
  var cityName;
  var temperature;
  var tempMax;
  var tempMin;
  var feelLike;
  var icon;

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Iasi&units=${unit}&appid=1a013505cb6de684e80f011688f6e136`
  )
    .then((res) => res.json())
    .then((data) => {
      cityName = data['name'];

      temperature = data['main']['temp'];
      tempMax = data['main']['temp_max'];
      tempMin = data['main']['temp_min'];
      feelLike = data['main']['feels_like'];
      icon = data['weather'][0]['icon'];

      displayWeather(cityName, temperature, tempMax, tempMin, feelLike, icon);
    });
}

function displayWeather(
  cityName,
  temperature,
  tempMax,
  tempMin,
  feelLike,
  icon
) {
  var city = document.getElementById('city');
  city.innerText = 'Current weather in ' + cityName;
  var currentTemp = document.getElementById('temp');
  currentTemp.innerText = temperature;
  var minTemp = document.getElementById('tempmin');
  minTemp.innerText = tempMin;
  var maxTemp = document.getElementById('tempmax');
  maxTemp.innerText = tempMax;
  var feel = document.getElementById('feels__like');
  feel.innerText = feelLike;
  var img = document.getElementById('img');
  img.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
}

function temperature() {
  const storageName = 'selectedTemperature';
  const tempToggle = document.querySelector('[data-temperature-toggle]');
  const radios = tempToggle.querySelectorAll('[type=radio]');
  var tempUnits = { Celsius: 'metric', Fahrenheit: 'imperial' };
  let savedValue;
  if (window.localStorage) {
    savedValue = localStorage.getItem(storageName);
  } else {
    savedValue = getValueFromCookie(storageName);
  }
  weather(savedValue);
  for (const radio of radios) {
    console.log(tempUnits[radio.value]);
    if (tempUnits[radio.value] === savedValue) {
      radio.checked = true;
    }
    radio.addEventListener('change', handleRadioChange);
  }

  function handleRadioChange(e) {
    const temp = e.target.value;

    if (window.localStorage) {
      localStorage.setItem(storageName, tempUnits[temp]);
    } else {
      document.cookie = `${storageName}=${tempUnits[temp]}`;
    }
    weather(tempUnits[temp]);
  }
}
temperature();

// ----------Section Contact-form-----------

var handleClickSubmit = function () {
  const firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    divSuccess = document.getElementById('succesMessage');

  firstName.classList.remove('borderRed');
  lastName.classList.remove('borderRed');
  divSuccess.classList.add('hide');

  if (firstName.value.length == 0) {
    firstName.classList.add('borderRed');

    if (lastName.value.length == 0) {
      lastName.classList.add('borderRed');
    }
    return;
  }
  if (lastName.value.length == 0) {
    lastName.classList.add('borderRed');

    if (firstName.value.length == 0) {
      firstName.classList.add('borderRed');
    }

    return;
  }
  var spanSuccess = document.getElementById('spanFirstName'),
    textFirstName = firstName.value;

  spanSuccess.innerHTML =
    'Thank you for contacting us: ' +
    textFirstName +
    '. ' +
    'I hope you enjoyed my page!';
  divSuccess.classList.remove('hide');

  console.log(firstName.value);
  console.log(lastName.value);
};

const butonSuccess = document.querySelector('.btn-success');
butonSuccess.addEventListener('click', function (e) {
  const targ = e.target;
  if (targ.matches('.btn-success')) {
    document.getElementById('succesMessage').classList.add('hide');
  }
});
