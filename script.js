let apiQuotes = [];

const quoteArrea = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteArrea.innerHTML = quote.text;    
    quoteAuthor.innerHTML = quote.author;
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json();
        newQuote();    
    }
    catch (error) {
        console.log(error.message)
    }
}

getQuotes();

const newQuoteBnt = document.querySelector("#new");
newQuoteBnt.addEventListener('click', newQuote());