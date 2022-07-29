// let apiQuotesEn = [];
console.log(localQuotesEn.length);
console.log(localQuotesPl.length);
const langPl = document.getElementById('pl');
const langEn = document.getElementById('en');
const quoteArrea = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
function newQuote() {
    if (langEn.classList.contains('active')) {
        const quote = localQuotesEn[Math.floor(Math.random() * localQuotesEn.length)];
        if (quote.text.length > 120) {
            quoteArrea.classList.add("long-qoute")
        } else {
            quoteArrea.classList.remove('long-quote')
        }
        quoteArrea.innerHTML = quote.text;
        quoteAuthor.innerHTML = quote.author;
        newQuoteBnt.innerHTML = "New Quote";
    } else {
        const quote = localQuotesPl[Math.floor(Math.random() * localQuotesPl.length)];
        if (quote.text.length > 120) {
            quoteArrea.classList.add("long-qoute")
        } else {
            quoteArrea.classList.remove('long-quote')
        }
        quoteArrea.innerHTML = quote.text;
        quoteAuthor.innerHTML = quote.author;
        newQuoteBnt.innerHTML = "Nowy cytat";
    }
    
}

// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl)
//         apiQuotesEn = await response.json();
//         console.log(apiQuotesEn.length);
//         localStorage.setItem("que", JSON.stringify(apiQuotesEn));
//         newQuote();    
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// }

// getQuotes();

const newQuoteBnt = document.getElementById('new');
// console.log(newQuoteBnt);
newQuoteBnt.addEventListener('click', newQuote);
newQuote();




langPl.addEventListener('click', changeActive);
langEn.addEventListener('click', changeActive);

function changeActive(event) {
    if (event.currentTarget.id === "pl" && langEn.classList.contains('active')) {
        langEn.classList.toggle('active');
        langPl.classList.toggle('active')
    }
    else if (event.currentTarget.id === "en" && langPl.classList.contains('active')) {
        langEn.classList.toggle('active');
        langPl.classList.toggle('active')
    }
    newQuote();
}