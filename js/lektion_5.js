let L5_1 = document.querySelector("#L5_1");
let L5_2 = document.querySelector("#L5_2");
let L5_3 = document.querySelector("#L5_3");
let L5_4 = document.querySelector("#L5_4");
let L5_5 = document.querySelector("#L5_5");




// Opgave 1
/*
let fetchFunction = async (url) => {
let res = await fetch(url);
let json = await res.json();
return json;
};

let data = await fetchFunction('https://dummyjson.com/products');
*/
// Jeg kopier fra dig men virker ikke




// opgave 2

async function fetchUrl(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.text();

        return data;
    } catch (error) {

        console.error('Error fetching data:', error);
    }
}
(async () => {
    const url = 'https://dummyjson.com/products/category-list';
    const result = await fetchUrl(url);
    console.log(result);
    opgaveTo(result)
})();


function opgaveTo(ListData) {
L5_2.textContent = ListData;

}



// Opgave 3

// Define the async function to post a new user
async function postNewUser(user) {
    try {
        let response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();

        L5_3.textContent = `User created successfully: ${JSON.stringify(data)}`;
    } catch (error) {
        // Handle any errors and display error message in the DOM
        L5_3.textContent = `Error creating user: ${error.message}`;
        L5_3.style.color = 'red';
    }
}

const newUser = {
    firstName: 'Omid',
    lastName: 'Kandlus',
    age: 38,
    username: 'omidKandlus',
    password: 'password123'
};

document.getElementById('createUserBtn').addEventListener('click', () => {
    postNewUser(newUser);
});


// Opgave 4
async function PostErrorUser(user) {
    try {
        let response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        // here is my Error function
        if (!response.ok) {
         
            if (response.status >= 400 && response.status < 500) {
                throw new Error(`Client error: ${response.status} ${response.statusText}`);
            } else if (response.status >= 500) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            } else {
                throw new Error(`Unexpected error: ${response.status} ${response.statusText}`);
            }
        }
        let data = await response.json();
        L5_4.textContent = `User created successfully: ${JSON.stringify(data)}`;
    } catch (error) {
        L5_4.textContent = `Error creating user: ${error.message}`;
        L5_4.style.color = 'red';
    }
}
const Opgave4User = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    username: 'johndoe',
    password: 'password123'
};

document.getElementById('CreatErrorBut').addEventListener('click', () => {
    PostErrorUser(Opgave4User);
});


// Opgave 5

// Define the async function to send a request
async function sendRequest(url, method, body = null) {
    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (body && method !== 'GET') {
            options.body = JSON.stringify(body);
        }
        let response = await fetch(url, options);

        if (!response.ok) {
            if (response.status >= 400 && response.status < 500) {
                throw new Error(`Client error: ${response.status} ${response.statusText}`);
            } else if (response.status >= 500) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            } else {
                throw new Error(`Unexpected error: ${response.status} ${response.statusText}`);
            }
        }

        let data = await response.json();

        L5_5.textContent = `Request successful: ${JSON.stringify(data)}`;
        L5_5.style.color = 'green';
    } catch (error) {
        // Handle any errors and display error message in the DOM
        L5_5.textContent = `Error making request: ${error.message}`;
        L5_5.style.color = 'red';
    }
}

// Example usage
const url = 'https://dummyjson.com/users/add';
const method = 'POST';
const body = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    username: 'johndoe',
    password: 'password123'
};

// Add event listener to the button to send a request
document.getElementById('fetchBtn').addEventListener('click', () => {
    sendRequest(url, method, body);
});
