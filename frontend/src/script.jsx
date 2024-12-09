// Get the Login button by class name
let loginButton = document.querySelector('.Login');

// Add an event listener to the Login button
loginButton.addEventListener('click', function() {
    // Redirect to another page when the Login button is clicked
    window.location.href = "sign in.html"; // Replace with the URL of your login page
});