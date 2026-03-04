// handling Asynchronus operations using callbacks

function fetchDataCallback(callback) {
    setTimeout(() => {
        const data = { id: 1, message: 'Hello from Callback!' };
        callback(null, data);
    }, 2000); // Simulating a 2-second delay
}
// Using the fetchDataCallback function with a callback
fetchDataCallback((error, data) => {
    if (error) {
        console.error('Error fetching data:', error);
    }
    else {
        console.log('Data received using Callback:', data);
    }
});

// Output after 2 seconds:
// Data received using Callback: { id: 1, message: 'Hello from Callback!' } 
// Note: The callback approach can lead to "callback hell" if not managed properly, which is why Promises and async/await are often preferred for handling asynchronous operations in modern JavaScript.