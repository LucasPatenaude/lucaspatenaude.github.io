// Get the reference to the input element
var inputElement = document.getElementById('phoneNumberInput');

// Function to handle click events for numbers
function handleNumberClick(number) 
{
  // Append the clicked number to the input element
  inputElement.value += number;
}

// Function to display random numbers on the page
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
    var randomNumber;

    // Generate a random number between 0 and 9
    do 
    {
      randomNumber = Math.floor(Math.random() * 10);
    } while (numbers.includes(randomNumber)); // Check if the number is already in the array

    // Add the unique random number to the array
    numbers.push(randomNumber);
  }

  // Iterate through the numbers array and append each number to the output element
  numbers.forEach(function (number) 
  {
    // Create a new <span> element for each number
    var span = document.createElement('span');

    // Set the text content of the <span> to the current number
    span.textContent = number;

    // Add the "numbers" class to the <span> element
    span.classList.add('numbers');

    // Add a click event listener to each number
    span.addEventListener('click', function () 
    {
      // Call the function to handle the click event
      handleNumberClick(number);
    });

    // Append the <span> to the output element
    outputElement.appendChild(span);
  });
}

// Call the function to display numbers when the page loads
displayNumbers();

// Set an interval to run the function every 3 seconds
setInterval(displayNumbers, 3000);
