// Get references to HTML elements
const customName = document.getElementById('customname'); // Get element with ID 'customname'
const randomize = document.querySelector('.randomize'); // Get first element with class 'randomize'
const story = document.querySelector('.story'); // Get first element with class 'story'

// Generate a random value from an array
function randomValueFromArray(array) 
{
    const random = Math.floor(Math.random() * array.length); // Generate a random index within the array's length
    return array[random]; // Return the element at the randomly generated index
}

// Define the story template and arrays for placeholders
const storyText = 'Once upon a time :insertx: was really bored. Suddenly :insertx: had an idea "I should call up my friend, Nosferatu, that would be great!" :insertx: called up all its friend, Nosferatu and told them, ":inserty:." Nosferatu replied, ":insertz:."' ;
const insertX = ['Smaug', 'John Denver', 'Chris Cringle', 'Bono', 'Ozzy Osbourne'];
const insertY = ['I\'m going to the bathroom', 'I\'m going to church', 'I\'m going to Denver', "I\'m visiting our local Death Row", "I\'m going to Imaginationland", "Is this the Krusty Krab?", "I weigh 450 pounds"];
const insertZ = ['Wow! What a great idea', 'That\'s the worst thing I\'ve ever heard', '[SCREAMING NOISES]', "No, This is Patrick"];

// Add an event listener to the 'randomize' button
randomize.addEventListener('click', result);

// Function to generate and display the story
function result() 
{
    let newStory = storyText; // Initialize newStory with the original story template

    // Get random items from arrays for placeholders
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // Replace placeholders in the story template with randomly selected items
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    // If a custom name is provided, replace 'Bob' in the story with the custom name
    if (customName.value !== '') // If query is not empty
    {
        const name = customName.value;
        newStory = newStory.replaceAll('Nosferatu', name); // Replace Nosferatu text with custom input
    }

    // If 'UK' checkbox is checked, convert temperature and weight units
    if (document.getElementById("uk").checked) 
    {
        const weight = `${Math.round(450 * 0.0714286)} stone`; // 1 Stone = 0.0714286
        newStory = newStory.replaceAll('450 pounds', weight); // Replace pounds text with value of weight
    }

    story.textContent = newStory; // Update the content of the 'story' element with the generated story
    story.style.visibility = 'visible'; // Make the 'story' element visible
}
