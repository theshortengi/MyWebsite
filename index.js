const randquote =document.getElementById("quote");
const quotes = ["Not All Who Wander Are Lost - J. R. R. Tolkien","If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away. - Henry David Thoreau", "quote 3"];
const quoteindex=Math.floor(Math.random()*quotes.length);
randquote.textContent=quotes[quoteindex];