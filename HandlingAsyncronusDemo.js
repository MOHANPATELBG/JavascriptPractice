// Handling Asynchronus Operations in JavaScript
// Asynchronous operations allow JavaScript to perform tasks without blocking the main thread.
// Common ways to handle asynchronous operations include callbacks, Promises, and async/await syntax.

// Example using Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, message: 'Hello, World!' };
            resolve(data);
        }, 2000); // Simulating a 2-second delay
    });
}

// Using the fetchData function with Promises
fetchData()
    .then(data => {
        console.log('Data received using Promises:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Example using async/await
async function getData() {
    try {
        const data = await fetchData();
        console.log('Data received using async/await:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}