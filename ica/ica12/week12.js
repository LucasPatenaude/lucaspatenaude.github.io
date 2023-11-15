const questionButton = document.querySelector('#js-new-quote');
questionButton.addEventListener('click', getQuote);

const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', displayAnswer);

const questionText = document.querySelector('#js-quote-text');
let answerText = document.querySelector('#js-answer-text');

let answer = '';

// Variable to hold API endpoint
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

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
        const json = await response.json();
        
        displayQuote(json['question']);
        answer = json['answer'];
        answerText.textContent = '';

    }
    // Run if error occurs --> Output error message to user
    catch(err)
    {
        console.log(err);
        alert('Failed to fetch a new quote');
    }
}

function displayQuote(question)
{
    questionText.textContent = question;
}

function displayAnswer()
{
    answerText.textContent = answer;
}

