// Get the reference to the input element
var inputElement = document.getElementById('phoneNumberInput');

// Flag to control whether to display numbers or not
var displayNumbersFlag = true;

// Function to handle click events for numbers
function handleNumberClick(number) 
{
  // Append the clicked number to the input element
  inputElement.value += number;

  // Add parentheses around the first three numbers
  if (inputElement.value.length === 3) 
  {
    inputElement.value = '(' + inputElement.value + ')';
  }

  if (inputElement.value.length === 5) 
  {
    inputElement.value += ' ';
  }

  // Add a dash between the 6th and 7th numbers
  if (inputElement.value.length === 9) 
  {
    inputElement.value += '-';
  }
}

// Function to generate a random interval value between 1 and 10 and call displayNumbers
function generateRandomInterval() 
{
  // Generate a random value between 1 and 10, then append "000" to it
  var intervalValue = Math.floor(Math.random() * 5) + 1;
  intervalValue = intervalValue * 1000; // Append "000"

  // Call displayNumbers with the new interval value
  displayNumbers();

  // Set an interval to run the function with the new interval value
  setInterval(displayNumbers, intervalValue);
}

// Function to display random numbers on the page with random positions
function displayNumbers() 
{
  // Check the displayNumbersFlag before generating numbers
  if (!displayNumbersFlag) 
  {
    return;
  }

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

    // Create a new <arrayOfNumbers> element for each number
    var arrayOfNumbers = document.createElement('arrayOfNumbers');

    // Set the text content of the <arrayOfNumbers> to the current number
    arrayOfNumbers.textContent = randomNumber;

    // Add the "numbers" class to the <arrayOfNumbers> element
    arrayOfNumbers.classList.add('numbers');

    // Set random position for the <arrayOfNumbers> element within the visible area of the content container
    var contentContainer = document.getElementById('content');
    var randomX = Math.random() * (contentContainer.clientWidth - 200); // Adjust as per your arrayOfNumbers element width
    var randomY = Math.random() * (contentContainer.clientHeight - 200); // Adjust as per your arrayOfNumbers element height
    arrayOfNumbers.style.position = 'absolute';
    arrayOfNumbers.style.left = randomX + 'px';
    arrayOfNumbers.style.top = randomY + 'px';

    // Add a click event listener to each number
    arrayOfNumbers.addEventListener('click', function () 
    {
      // Call the function to handle the click event
      handleNumberClick(randomNumber);
    });

    // Append the <arrayOfNumbers> to the output element
    outputElement.appendChild(arrayOfNumbers);
  }
}

// Call the function to display numbers when the page loads
generateRandomInterval();
