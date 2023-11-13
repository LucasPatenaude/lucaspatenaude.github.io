// Assuming pictures is an array containing image filenames
const pictures = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const darkenButton = document.querySelector('.dark');
const overlay = document.querySelector('.overlay'); // Define overlay

/* Declaring the alternative text for each image file */
const altText = {
    pic1: "Beautiful landscape with mountains and a lake",
    pic2: "Close-up of a cute kitten",
    pic3: "Abstract artwork with vibrant colors",
    pic4: "Close-up of a cute kitten",
    pic5: "Abstract artwork with vibrant colors",
    // Add more images and their corresponding alt text as needed
};

/* Looping through images */

pictures.forEach((filename, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${filename}`; // Assuming images are in the "images" directory
    imgElement.alt = altText[`pic${index + 1}`]; // Fixed altText key
    imgElement.classList.add('thumbnail'); // Add a class for styling

    // Add click event listener to switch the displayed image
    imgElement.addEventListener('click', () => {
        displayedImage.src = imgElement.src;
        displayedImage.alt = imgElement.alt;
    });

    thumbBar.appendChild(imgElement);
});

/* Adding a click event listener to the button */

darkenButton.addEventListener('click', () => {
    const currentClass = darkenButton.getAttribute('class');
    
    if (currentClass === 'dark') {
        darkenButton.setAttribute('class', 'light');
        darkenButton.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        darkenButton.setAttribute('class', 'dark');
        darkenButton.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
