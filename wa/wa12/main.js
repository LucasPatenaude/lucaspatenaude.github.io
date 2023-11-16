const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getFact);

const catFactText = document.querySelector('#js-quote-text');

// Variable to hold API endpoint
const catFactAPI = 'https://cat-fact.herokuapp.com';

async function getFact() 
{
    try 
    {
        // Fetch a random cat fact from the Cat Facts API
        const catFactsResponse = await fetch(`${catFactAPI}/facts`);
        const catFactsData = await catFactsResponse.json();
        
        // Display the question and cat fact
        displayCatFact(catFactsData);
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
   
    // Display the cat fact
    console.log(catFact);
    // You can update your UI to display the cat fact as needed
}

/*
function displayQuote(quote)
{
    questionText.textContent = quote;
} 
*/