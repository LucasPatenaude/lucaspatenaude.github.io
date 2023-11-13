const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
pictures[5] = "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg";

/* Declaring the alternative text for each image file */
const altText = 
{
    pic1: "Beautiful landscape with mountains and a lake",
    pic2: "Close-up of a cute kitten",
    pic3: "Abstract artwork with vibrant colors",
    pic4: "Close-up of a cute kitten",
    pic5: "Abstract artwork with vibrant colors",
    // Add more images and their corresponding alt text as needed
};

/* Looping through images */

// Loop through the filenames and create thumbnail images
filenames.forEach((filename, index) => 
{
    const imgElement = document.createElement('img');
    imgElement.src = filename;
    imgElement.alt = altText[`image${index + 1}`]; // Assuming filenames correspond to altText keys
    imgElement.classList.add('thumbnail');

    // Add click event listener to switch the displayed image
    imgElement.addEventListener('click', () => 
    {
        displayedImg.src = filename;
        displayedImg.alt = altText[`image${index + 1}`];
    });

    thumbBar.appendChild(imgElement);
});

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
