let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");

// Opgave 1
function fullName(firstName, lastName) {
  let greeting = "Welcome " + firstName + " " + lastName;
  let newH3 = document.createElement("h3");
  newH3.innerText = greeting;
  L1_1.appendChild(newH3);
}

// Opgave 2

// Function Calls
fullName("Ukendt", "Person");


function fullName(elementId, test) {
  if (elementId == 'Omid') {
    L1_2.classList.toggle('hidden');
  } else {L1_2.classList.toggle('visible');}
}


// opgave 3

L1_3.addEventListener('click', function() {
  var h3Element = document.getElementById('opgave3');
  var messageElement = document.getElementById('message');
  
  h3Element.classList.toggle('red');
  
  if (h3Element.classList.contains('red')) {
    messageElement.classList.remove('hidden');
  } else {
    messageElement.classList.add('hidden');
  }
});

// Opgave 4

document.addEventListener('DOMContentLoaded', (event) => {
  let count = 0; 
  if (localStorage.getItem('clickCount')) {
    count = parseInt(localStorage.getItem('clickCount'), 10);
  }

  const button = document.getElementById('L1_4'); 
  const clickCountDisplay = document.getElementById('clickCount'); 

  function updateClickCount() {
    count += 1; 
    clickCountDisplay.textContent = `Number of clicks: ${count}`; 
  }
  button.addEventListener('click', updateClickCount);
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('clickCount', count);
  });
});


// Opgave5

document.addEventListener('DOMContentLoaded', (event) => {
  const inputField = document.getElementById('wordInput'); 
  const submitButton = document.getElementById('submitButton'); 
  const wordDisplay = document.getElementById('wordDisplay'); 
  const lengthDisplay = document.getElementById('lengthDisplay'); 


  function displayWordInfo(word) {
    const wordLength = word.length; 
    wordDisplay.textContent = `Word: ${word}`; 
    lengthDisplay.textContent = `Length: ${wordLength}`; 
  }


  submitButton.addEventListener('click', () => {
    const word = inputField.value; 
    displayWordInfo(word); 
  });
});

// Opgave 6

document.addEventListener('DOMContentLoaded', (event) => {
  const inputsection = document.getElementById('wordInput'); 
  const submitField = document.getElementById('submitButton'); 
  const cleanedWordDisplay = document.getElementById('cleanedWordDisplay'); 

 
  function removeVowels(word) {
    return word.replace(/[aeiouAEIOU]/g, ''); 
  }

  function displayCleanedWord(word) {
    const cleanedWord = removeVowels(word); 
    cleanedWordDisplay.textContent = `Cleaned word: ${cleanedWord}`; 
  }


  submitField.addEventListener('click', () => {
    const word = inputsection.value; 
    displayCleanedWord(word); 
  });
});
