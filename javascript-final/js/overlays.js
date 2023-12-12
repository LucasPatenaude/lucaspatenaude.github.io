document.addEventListener("DOMContentLoaded", function() {
    // Get the content area
    var content = document.getElementById("content");

    content.style.width = "100%";

    // Create a red rectangle that moves up and down and spans the whole width
    var redRectangle = document.createElement("div");
    redRectangle.style.width = "100%";  // Set the width to 100%
    redRectangle.style.height = "50px";
    redRectangle.style.backgroundColor = "red";
    redRectangle.style.position = "absolute";
    redRectangle.style.top = "50px"; // Set an initial top position
    content.appendChild(redRectangle);

    // Create a blue rectangle that moves side to side
    var blueRectangle = document.createElement("div");
    blueRectangle.style.width = "50px";
    blueRectangle.style.height = "100%";
    blueRectangle.style.backgroundColor = "blue";
    blueRectangle.style.position = "absolute";
    content.appendChild(blueRectangle);

    // Animation for the red rectangle (moves up and down)
    var redMovement = 2;
    function animateRedRectangle() {
        var topPosition = redRectangle.offsetTop;

        if (topPosition <= 0 || topPosition >= content.clientHeight - redRectangle.clientHeight) {
            redMovement = -redMovement;
        }

        redRectangle.style.top = topPosition + redMovement + "px";
        requestAnimationFrame(animateRedRectangle);
    }

    // Animation for the blue rectangle (moves side to side)
    var blueSpeed = 2;
    function animateBlueRectangle() {
        var leftPosition = blueRectangle.offsetLeft;

        if (leftPosition <= 0 || leftPosition >= content.clientWidth - blueRectangle.clientWidth) {
            blueSpeed = -blueSpeed;
        }

        blueRectangle.style.left = leftPosition + blueSpeed + "px";
        requestAnimationFrame(animateBlueRectangle);
    }

    // Start the animations
    animateRedRectangle();
    animateBlueRectangle();
});
