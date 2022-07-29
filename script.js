let apiQuotes = [];
let quoteText;
const quoteArrea = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    quoteArrea.innerHTML = quote.text;    
    quoteAuthor.innerHTML = quote.author;
    // return quote
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
// console.log(newQuoteBnt);
newQuoteBnt.addEventListener('click', newQuote());