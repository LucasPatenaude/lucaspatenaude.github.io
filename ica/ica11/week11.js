console.log("Hello");

const btn = document.querySelector("button");
const numberCircles = document.getElementById('textbox'); // Get element with ID 'customname'
const canvas = document.querySelector("canvas");
const circleCanvas = canvas.getContext("2d")

document.addEventListener("DOMContentLoaded", () => 
{
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number)
{
    return Math.floor(Math.random() * number);
}

function randomColor()
{
    return Math.floor(Math.random() * 255);
}

console.log(randomColor);

function draw()
{
    circleCanvas.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas each time draw() is initiated

    const numberOfCircles = parseInt(numberCircles.value); // Get the value from the input field; Convert from string to integer
    
    // Create a circle [numberOfCircles] of times
    for (let i = 0; i < numberOfCircles; i++) 
    {
        // Generate random values for each RGB value
        let randomRed = randomColor();
        let randomGreen = randomColor();
        let randomBlue = randomColor();
        let randomDecimal = Math.random();

        // Create the Circle
        circleCanvas.beginPath();

        // Set circle color and opacity
        circleCanvas.fillStyle = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${randomDecimal})`;

        // Set random values for circle size
        circleCanvas.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),
            0,
            2 * Math.PI
        );

        // Fill the circle
        circleCanvas.fill();
    }
}

btn.addEventListener("click", draw)