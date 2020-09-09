const randquote =document.getElementById("quote");
const quotes = ["Not All Who Wander Are Lost - J. R. R. Tolkien",
    "If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away. - Henry David Thoreau",
    "Non impediti ratione cogitationis - Tom Magliozzi"];
const quoteindex=Math.floor(Math.random()*quotes.length);
randquote.textContent=quotes[quoteindex];

function life() {
    if (document.getElementById("1").checked==true&&document.getElementById("2").checked==true&&document.getElementById("3").checked==true){
        const randnum=Math.floor(Math.random()*3)+1;
        document.getElementById(randnum.toString()).checked=false;
    }
}

document.getElementById("1").addEventListener("change",life);
document.getElementById("2").addEventListener("change",life);
document.getElementById("3").addEventListener("change",life);
