// Function to update the countdown timer
function updateTimer() 
{
    // Get the timer and input elements from the document
    var timerElement = document.getElementById('timer');
    var inputElement = document.getElementById('phoneNumberInput');
    // Set the initial value of seconds to 30
    var seconds = 30;

    // Function to format time in mm:ss format
    function formatTime(time) 
    {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Function to flash the timer in red for a short duration
    function flashRed() 
    {
        var timerElement = document.getElementById('timer');
        timerElement.style.backgroundColor = 'red';
        
        setTimeout(function () 
        {
            timerElement.style.backgroundColor = ''; // Reset background color
        }, 500); // Adjust duration as needed
    }

    // Set up an interval to update the timer every second
    var intervalId = setInterval(function () 
    {
        // Check if there are remaining seconds
        if (seconds >= 0) 
        {
            // Update the timer element with the formatted time
            timerElement.innerText = formatTime(seconds);
            seconds--;
        } 
        else 
        {
            // Timer has reached zero
            timerElement.innerText = '00:00';
            inputElement.value = ''; // Clear the text box
            clearInterval(intervalId); // Stop the current interval
            flashRed(); // Flash the screen red
            seconds = 30; // Restart the timer to 30
            intervalId = setInterval(arguments.callee, 1000); // Start a new interval
        }
    }, 1000);
}

// Call the function to start the countdown timer
updateTimer();
