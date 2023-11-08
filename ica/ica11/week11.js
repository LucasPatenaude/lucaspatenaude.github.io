console.log("Hello");

const btn = document.querySelector("button");
const numberCircles = document.getElementById('textbox'); // Get element with ID 'customname'
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const numberOfCircles = parseInt(numberCircles.value); // Get the value from the input field
    for (let i = 0; i < numberOfCircles; i++)
    {
        ctx.beginPath();

        // Generate random values for each RGB value
        let randomRed = randomColor();
        let randomGreen = randomColor();
        let randomBlue = randomColor();
        let randomDecimal = Math.random();

        ctx.fillStyle = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${randomDecimal})`;
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),
            0,
            2 * Math.PI
        );
        ctx.fill();
    }
}

btn.addEventListener("click", draw)