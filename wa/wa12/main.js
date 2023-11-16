const quoteButton = document.querySelector('#js-new-fact');
quoteButton.addEventListener('click', getFact);

const catFactText = document.querySelector('#js-fact-text');
const catPicture = document.querySelector('#js-cat-picture'); // Assuming you have an img element with this ID

// Variable to hold API endpoints
const catFactAPI = 'https://cat-fact.herokuapp.com';
const catPictureAPI = "http://placekitten.com/";

async function getFact() 
{
    try 
    {
        // Fetch a random cat fact from the Cat Facts API
        const catFactsResponse = await fetch(`${catFactAPI}/facts`);
        const catFactsData = await catFactsResponse.json();

        // Fetch a random cat picture from the PlaceKitten API
        const catPictureSrc = getCatPictureSrc();
        
        // Display the cat fact and picture
        displayCatFact(catFactsData);
        displayCatPicture(catPictureSrc);
    } 
    
    catch (error) 
    {
        console.error('Error fetching data:', error);
        alert('Failed to fetch a new quote');
    }
}

function displayCatFact(catFactsData) 
{
    // Assuming the catFactsData is an array of facts, you might want to choose one randomly
    const randomIndex = Math.floor(Math.random() * catFactsData.length);
    const catFact = catFactsData[randomIndex].text;

    catFactText.textContent = catFact;
}

function displayCatPicture(src) 
{
    catPicture.src = src;
}

function getCatPictureSrc() 
{
    // Generate a random size for the cat picture (replace this logic as needed)
    const width = 450;
    const height = Math.floor(Math.random() * 100) + 500;
    return `${catPictureAPI}${width}/${height}`;
}
