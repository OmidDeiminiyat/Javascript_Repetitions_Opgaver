let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");





// Opgave 1
function checkValue() {
    const inputValue = document.getElementById('inputValue').value;
    const resultElement = document.getElementById('result');

    if (!isNaN(inputValue) && inputValue.trim() !== '') {
        resultElement.textContent = `The value "${inputValue}" is a number.`;
    } else {
        resultElement.textContent = `The value "${inputValue}" is a string.`;
    }
}


// Opgave 2

function validateEmail() {
            const email = document.getElementById('emailInput').value;
            const resultElement = document.getElementById('emailResult');
            
            // Regular expression to validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailPattern.test(email)) {
                resultElement.textContent = `The email "${email}" is valid.`;
                resultElement.style.color = 'green';
            } else {
                resultElement.textContent = `The email "${email}" is invalid.`;
                resultElement.style.color = 'red';
            }
        }


        // Opgave 3

        function checkStringLength() {
            const inputString = document.getElementById('stringInput').value;
            const resultElement = document.getElementById('lengthResult');
            
            if (inputString.length >= 2) {
                resultElement.textContent = `The string "${inputString}" is long enough.`;
                resultElement.style.color = 'green';
            } else {
                resultElement.textContent = `The string "${inputString}" is too short.`;
                resultElement.style.color = 'red';
            }
        }


        // Opgave 4

        function generateRandomNumber() {
            const startValue = parseInt(document.getElementById('startValue').value);
            const endValue = parseInt(document.getElementById('endValue').value);
            const resultElement = document.getElementById('randomResult');

            if (isNaN(startValue) || isNaN(endValue)) {
                resultElement.textContent = 'Indtast venligst gyldige tal for både start- og slutværdier.';
                resultElement.style.color = 'red';
                return;
            }

            if (startValue >= endValue) {
                resultElement.textContent = 'Startværdien skal være mindre end slutværdien.';
                resultElement.style.color = 'red';
                return;
            }

            const randomValue = Math.floor(Math.random() * (endValue - startValue + 1)) + startValue;
            resultElement.textContent = `Vores tilfældige tal mellem ${startValue} og ${endValue} er: ${randomValue}`;
            resultElement.style.color = 'black';
        }


        // Opgave 4
        function getRandomRGB() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        function createColorElement() {
            const colorValue = getRandomRGB();
            const newElement = document.createElement('div');
            newElement.style.width = '100px';
            newElement.style.height = '100px';
            newElement.style.backgroundColor = colorValue;
            newElement.style.margin = '10px';
            newElement.textContent = colorValue;
            newElement.style.color = '#fff';
            newElement.style.display = 'flex';
            newElement.style.alignItems = 'center';
            newElement.style.justifyContent = 'center';
            newElement.style.fontFamily = 'Arial, sans-serif';

            const colorContainer = document.getElementById('colorContainer');
            colorContainer.appendChild(newElement);
        }
