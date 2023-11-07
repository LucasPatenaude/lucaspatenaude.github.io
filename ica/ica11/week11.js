console.log("Hello");

const btn = document.querySelector("button");
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
    for (let i = 0; i < 100; i++)
    {
        ctx.beginPath();
        let randomRed = randomColor();
        let randomGreen = randomColor();
        let randomBlue = randomColor();
    

        ctx.fillStyle = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, 0.5)`;
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