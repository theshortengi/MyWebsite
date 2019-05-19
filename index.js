const randquote =document.getElementById("quote");
const quotes = ["Not All Who Wander Are Lost- J. R. R. Tolkien","quote 2", "quote 3"];
const quoteindex=Math.floor(Math.random()*quotes.length);
randquote.textContent=quotes[quoteindex];