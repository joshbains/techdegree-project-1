/*
 Array containing 5 objects with their listed
  quotes, sources, year, and citations.
*/
var quotes = [
    {
      quote: "With great power comes great responsibility.",
      source: "Uncle Ben",
      year: "2002",
      citation: "Spider-Man",
      tag: "Life Advice"
    },
    {
      quote: "You miss 100% of the shots you don't take. - Wayne Gretzky",
      source: "Michael Scott",
      year: "2009",
      citation: "The Office (US)",
      tag: "Humor"
    },
    {
      quote: "A ship is safe in harbor, but that's not what ships are made for.",
      source: "John Shedd",
      year: "1928",
      citation: "Salt from my Attic",
      tag: "Inspiration"
   },
    {
      quote: "Failure is only the opportunity to begin again. Only this time, more wisely.",
      source: "Uncle Iroh",
      year: "",
      citation: "Avatar: The Last Airbender",
      tag: "Wisdom"
    },
    {
      quote: "Be the person your dog thinks you are.",
      source: "J.W. Stephens",
      year: "",
      citation: "",
      tag: "Humor"
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
      if (getQuote.tag.length > 0){
        quoteString += '<p class="tag">' + getQuote.tag + '</p> '
      }
    document.getElementById("quote-box").innerHTML = quoteString;
    document.body.style.backgroundColor = randomColor();
}

//function to generate a random color by combining RGB
function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

//invokes printQuote every 25 seconds to refresh
setInterval(printQuote, 25000);

// Do NOT mess with code below.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

