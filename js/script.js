/*
 Array containing 5 objects with their listed
  quotes, sources, year, and citations.
*/
var quotes = [
    {
      quote: "\"With great power comes great responsibility.\"",
      source: "Uncle Ben",
      year: "2002",
      citation: "Spider-Man",
    },
    {
      quote: "\"You miss 100% of the shots you don't take. - Wayne Gretzky\"",
      source: "Michael Scott",
      year: "2009",
      citation: "The Office (US)",
    },
    {
      quote: "\"A ship is safe in harbor, but that's not what ships are made for.\"",
      source: "John Shedd",
      year: "1928",
      citation: "Salt from my Attic",
   },
    {
      quote: "\"Failure is only the opportunity to begin again. Only this time, more wisely.\"",
      source: "Uncle Iroh",
      year: "",
      citation: "Avatar: The Last Airbender",
    },
    {
      quote: "\"Be the person your dog thinks you are.\"",
      source: "J.W. Stephens",
      year: "",
      citation: "",
    }
  ];

  /*
Function generates random number based on number of quotes
  in array. The number is the index used to select the array
  randomly and then returned.
  */

  function getRandomQuote() {
    var randomNum = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomNum];
    return randomQuote;
  }

/*
Function assigns object to string value. Then starts to
  generate HTML text for each category by calling the specific
  string value of the object key. 'If statements' check the 
  contents of string value to see if this exist to add to text.
*/

function printQuote() {
  var getQuote = getRandomQuote();
  var quoteString = "";
    quoteString += '<p class="quote">' + getQuote.quote + '</p>';
    quoteString += '<p class="source">' + getQuote.source;
      if (getQuote.citation.length > 0) {
        quoteString += '<span class="citation">' + getQuote.citation + '</span>';
      }
      if (getQuote.year.length > 0){
        quoteString += '<span class="year">' + getQuote.year + '</span></p>';
      }
    document.getElementById("quote-box").innerHTML = quoteString;
}

// Do NOT mess with code below.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

