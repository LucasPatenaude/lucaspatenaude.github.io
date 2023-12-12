// Function to update the countdown timer
function updateTimer() 
{
    // Get the timer and input elements from the document
    var timerElement = document.getElementById('timer');
    var inputElement = document.getElementById('phoneNumberInput');
    // Set the initial value of seconds to 30
    var seconds = 30;
    var isPaused = false; // Flag to indicate whether the timer is paused
  
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
      timerElement.style.backgroundColor = 'red';
  
      setTimeout(function () 
      {
        timerElement.style.backgroundColor = ''; // Reset background color
      }, 500); // Adjust duration as needed
    }
  
    // Set up an interval to update the timer every second
    var intervalId = setInterval(function () 
    {
      // Check if the timer is not paused
      if (!isPaused) 
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
          timerElement.innerText = '0:00';
          
          phoneNumberInput.value = ''; // Clear the text field

          // Remove background image
          document.body.style.backgroundImage = 'none';
      
          // Flash the screen red
          document.body.style.backgroundColor = 'red';

          // Clear the text field after a brief delay
          setTimeout(function () 
          {
              phoneNumberInput.value = ''; // Clear the text field
              // Reset the background color after the delay
              document.body.style.backgroundColor = '';

              // Reset background image
              document.body.style.backgroundImage = 'url("css/Images/Ice\ Background.jpg")';
          }, 1000); // Adjust the delay (in milliseconds) as needed
          seconds = 30; // Restart the timer to 30
        }
      }
    }, 1000);
  
    // Attach a function to pause the timer to the window object
    window.pauseTimer = function () 
    {
      isPaused = true; // Set the flag to pause the timer
    };
  
    // Attach a function to resume the timer to the window object
    window.resumeTimer = function () 
    {
      isPaused = false; // Set the flag to resume the timer
    };
  }
  
  // Call the function to start the countdown timer
  updateTimer();
  