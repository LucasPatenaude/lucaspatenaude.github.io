document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    // Find the submit button and the input field
    const submitButton = document.querySelector('nav button[type="submit"]');
    const phoneNumberInput = document.getElementById('phoneNumberInput');
    const numbersArray = document.getElementById('numbers_array');

    // Add a click event listener to the submit button
    submitButton.addEventListener('click', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Store the length of the text input
        const phoneNumberLength = phoneNumberInput.value.length;

        // Check if passed in string is 10 characters
        if (phoneNumberLength === 14) 
        {
            

            // Change the background color to green
            document.body.style.backgroundColor = 'green';
            // Clear any other content (e.g., numbers array)
            numbersArray.innerHTML = '';
            // Hide the overlays
            hideOverlays();
            // Hide Number Array
            displayNumbersFlag = false;
        }
        // Phone number is too long or short
        else
        {
        phoneNumberInput.value = ''; // Clear the text field
        }
    });

    // Function to hide the overlays
    function hideOverlays() {
        // Get the red and blue rectangles
        const redRectangle = document.querySelector('#content > div:nth-child(3)');
        const blueRectangle = document.querySelector('#content > div:nth-child(4)');

        // Set display property to 'none' to hide the overlays
        redRectangle.style.display = 'none';
        blueRectangle.style.display = 'none';
    }
});
