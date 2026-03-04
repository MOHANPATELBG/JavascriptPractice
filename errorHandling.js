// Error Handling in Asynchronous JavaScript
// Error handling is crucial in asynchronous operations to manage potential failures gracefully.
// Common methods for error handling include using try/catch blocks with async/await and .catch() with Promises.
// Example using Promises with .catch()
function fetchDataWithError() {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            const error = true; // Simulating an error condition
            if (error) {
                reject('Failed to fetch data.');
            } else {
                const data = { id: 1, message: 'Hello, Error Handling!' };
                resolve(data);
            }
        }, 2000); // Simulating a 2-second delay
    });
}

// Using the fetchDataWithError function with Promises and .catch()
fetchDataWithError()
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
// Example using async/await with try/catch
async function getDataWithErrorHandling() {
    try {
        const data = await fetchDataWithError();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }   
}

// Calling the async function to demonstrate error handling
getDataWithErrorHandling(); 
// Output after 2 seconds:
// Error fetching data: Failed to fetch data.
// Error fetching data: Failed to fetch data.
// Note: Proper error handling ensures that your application can respond to failures without crashing, providing a better user experience.
