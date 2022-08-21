let quotes = [
  "When you have a dream, you've got to grab it and never let go",
  "Nothing is impossible. The word itself says 'I'm possible!",
  "There is nothing impossible to they who will try",
  "The bad news is time flies. The good news is you're the pilot",
  "Life has got all those twists and turns. You've got to hold on tight and off you go",
  "Keep your face always toward the sunshine, and shadows will fall behind you",
  "Success is not final, failure is not fatal: it is the courage to continue that counts",
  "You define your own life. Don't let other people write your script",
  "You are never too old to set another goal or to dream a new dream",
  "Spread love everywhere you go"
];
let names = [
  "Carol Burnett",
  "Audrey Hepbur",
  "Alexander the Great",
  "Michael Altshuler",
  "Nicole Kidman",
  "Walt Whitman",
  "Winston Churchill",
  "Oprah Winfrey",
  "Malala Yousafzai",
  "Mother Teresa",
];

let len = quotes.length;
let idx = 0;
document.getElementById("quote").innerHTML = quotes[0];
document.getElementById("name").innerHTML = names[0];

document.getElementById("btn").onclick = function () {
  generateRandomQuote();
};

function generateRandomQuote() {
  let idx = Math.floor(Math.random() * len);
  document.getElementById("quote").innerHTML = quotes[idx];
  document.getElementById("name").innerHTML = names[idx];
}
