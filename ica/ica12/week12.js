const QuoteButton = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerButton = document.querySelector('#js-tweet').addEventListener('click', getAnswer);

let answer = "";


// Variable to hold API endpoint
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasQuote';

async function getQuote() // <-- Make this async to run fetch() API
{
    try 
    {
        const response = await fetch(endpoint);

        // Check if reponse has an error
        if(!response.ok)
        {
            throw Error(response.statusText);
        }

        const json = await response.json(); //Get reponse form JSON

        // onsole.log(json['Quote']); // Output JSON to console
        displayQuote(json['Quote']);
        answerText
        answer = json['answer'];

    }
    // Run if error occurs --> Output error message to user
    catch(err)
    {
        console.log(err);
        alert('Failed to fetch a new quote');
    }
}


function displayQuote(Quote)
{
    const QuoteText = document.querySelector('#js-quote-text');
    QuoteText.textContent = Quote;
}

function displayAnswer(answer)
{
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}

