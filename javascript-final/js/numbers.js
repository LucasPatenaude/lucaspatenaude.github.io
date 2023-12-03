// Get the reference to the input element
var inputElement = document.getElementById('phoneNumberInput');

// Function to handle click events for numbers
function handleNumberClick(number) 
{
  // Append the clicked number to the input element
  inputElement.value += number;
}

// Function to generate a random interval value between 1 and 10 and call displayNumbers
function generateRandomInterval() 
{
  // Generate a random value between 1 and 10, then append "000" to it
  var intervalValue = Math.floor(Math.random() * 7) + 1;
  intervalValue = intervalValue * 1000; // Append "000"

  // Call displayNumbers with the new interval value
  displayNumbers();

  // Set an interval to run the function with the new interval value
  setInterval(displayNumbers, intervalValue);
}

// Function to display random numbers on the page with random positions
function displayNumbers() 
{
  // Your array of numbers
  var numbers = [];

  // Get the reference to the output element
  var outputElement = document.getElementById('numbers_array');

  // Clear the existing content of the elements
  outputElement.innerHTML = '';

  // Generate unique random numbers
  for (var i = 0; i < 10; i++) 
  {
    let randomNumber;

    // Generate a random number between 0 and 9
    do 
    {
      randomNumber = Math.floor(Math.random() * 10);
    } while (numbers.includes(randomNumber)); // Check if the number is already in the array

    // Add the unique random number to the array
    numbers.push(randomNumber);

    // Create a new <span> element for each number
    var span = document.createElement('span');

    // Set the text content of the <span> to the current number
    span.textContent = randomNumber;

    // Add the "numbers" class to the <span> element
    span.classList.add('numbers');

    // Set random position for the <span> element within the visible area of the content container
    var contentContainer = document.getElementById('content');
    var randomX = Math.random() * (contentContainer.clientWidth); // Adjust as per your span element width
    var randomY = Math.random() * (contentContainer.clientHeight); // Adjust as per your span element height
    span.style.position = 'absolute';
    span.style.left = randomX + 'px';
    span.style.top = randomY + 'px';

    // Add a click event listener to each number
    span.addEventListener('click', function () 
    {
      // Call the function to handle the click event
      handleNumberClick(randomNumber);
    });

    // Append the <span> to the output element
    outputElement.appendChild(span);
  }
}

// Call the function to display numbers when the page loads
generateRandomInterval();
