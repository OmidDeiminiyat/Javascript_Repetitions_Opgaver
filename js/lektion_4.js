let L4_1 = document.querySelector("#L4_1");
let L4_2 = document.querySelector("#L4_2");
let L4_3 = document.querySelector("#L4_3");
let L4_4 = document.querySelector("#L4_4");
let L4_5 = document.querySelector("#L4_5");




const firstname = document.getElementById('firstInp');
const lastname = document.getElementById('secInp');
const resault = document.getElementById('Resault');
firstname.addEventListener('change', () => {
    const name = firstname.value;
    console.log(name);
    resault.textContent=name;
});

lastname.addEventListener('change', () => {
    const Last = lastname.value;
    console.log(Last);
});



// Opgave 2


    let counterElement = document.getElementById('counter');
    let startButton = document.getElementById('startButton');
    let counter = 0;
    let intervalId = null;

    function startCounting() {
        if (intervalId === null) {
            intervalId = setInterval(() => {
                counter++;
                counterElement.textContent = counter;
            }, 1000);
        }
    }

    function stopCounting() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    startButton.addEventListener('click', startCounting);



// Opgave 3


    let currentEl = document.getElementById('counter2');
    let StBut = document.getElementById('startButton2');
    let stopButton = document.getElementById('stopButton');
    let resetButton = document.getElementById('resetButton');
    let Counti = 0;
    let interId = null;

    function cunte() {
        if (interId === null) {
            interId = setInterval(() => {
                Counti++;
                currentEl.textContent = Counti;
            }, 1000);
        }
    }

    function stopCounting() {
        if (interId !== null) {
            clearInterval(interId);
            interId = null;
        }
    }

    function resetCounting() {
        stopCounting();
        Counti = 0;
        currentEl.textContent = Counti;
    }

    StBut.addEventListener('click', cunte);
    stopButton.addEventListener('click', stopCounting);
    resetButton.addEventListener('click', resetCounting);


    // Opgave 4

    document.addEventListener('DOMContentLoaded', () => {
        const percentageElement = document.getElementById('percentage');

        function updateScrollPercentage() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            percentageElement.textContent = `${Math.round(scrolled)}%`;
        }
    
        // Add event listener for scroll event
        window.addEventListener('scroll', updateScrollPercentage);
    });
    

    // Opgave 5

function showToast(message, type, position) {
    const toast = document.createElement('div');
    toast.classList.add('toast', type);
    toast.innerText = message;

  
    if (position === 'top-left') {
        toast.classList.add('top-left');
    } else if (position === 'top-right') {
        toast.classList.add('top-right');
    } else if (position === 'bottom-left') {
        toast.classList.add('bottom-left');
    } else if (position === 'bottom-right') {
        toast.classList.add('bottom-right');
    }


    document.getElementById('toastContainer').appendChild(toast);

    setTimeout(function() {
        toast.style.opacity = 1;
    }, 100);

  
    setTimeout(function() {
        toast.style.opacity = 0;
        setTimeout(function() {
            toast.remove();
        }, 300);
    }, 3000);
}

// Example usage:
showToast('Success message', 'success', 'top-left');
showToast('Warning message', 'warning', 'bottom-left');
showToast('Error message', 'error', 'top-right');
