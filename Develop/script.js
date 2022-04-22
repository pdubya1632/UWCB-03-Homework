
// Get DOM
const passwordText = document.getElementById('password');
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const form = document.getElementById('passGenerate');

// Create char codes
const chars = {
  lowercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  uppercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  synbols: '!@#$%^&*()_+~\\`|}{[]:;?><,./-=',
}

// Create password
const createPassword = (count, upper, numbers, symbols) => {
  
}

// Checking the options selected, calling password function, inserting password
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const count = lengthDOM.value;
  const upper = uppercaseDOM.checked;
  const numbers = numbersDOM.checked;
  const symbols = symbolsDOM.checked;
  const password = createPassword(count, upper, numbers, symbols);
  // passwordText.innerText = password;
});


