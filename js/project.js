/**
* Welcome to my first Team Treehouse Techdegree Project!
* Full Stack Web Developer Project 1: A Random Quote Generator
*/

/** 
* The following array named 'quotes' includes 5 objects
* Each object includes the properties 'quote' and 'source'
* One of the object includes the additional properties 'citation' and 'year'
*/ 
let quotes = [
	{quote: "A great man is alway willing to be little.",
	source: "R.W. Emerson",
	},
	{quote: "The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.", 
	source: "G.K. Chesterton",
	},
	{quote: "When we try to pick out anything by itself, we find it hitched to everything else in the Universe.",
	source: "John Muir",
	citation: "A book by John Muir: A Thousand-Mile Walk to the Gulf.",
	year: "1916",
	},
	{quote: "We don't see things as they are, we see them as we are.",
	source: "Anaïs Nin",
	},
	{quote: "They lived and laughed and loved and left.",
	source: "James Joyce",
	},
];

//The following function named 'getRandomQuote' randomizes the quote objects above and returns one of them when the function gets called
function getRandomQuote() {
	let randomQuote = Math.floor(Math.random() * quotes.length);
	return quotes[randomQuote];
};

/**
* The following function named 'printQuote' uses the 'getRandomQuote' function to write the returned quote to the webpage
* The HTML string was added onto using template literals. The quote and source was added for every quote object 
* The HTML string was then added onto using template literals if the quote object contained a citation or year using an 'if' statement
*/
function printQuote() {
	let myRandomQuote = getRandomQuote();
	let storeHTML = `<p class="quote"> ${myRandomQuote.quote} </p> <p class="source"> Source: ${myRandomQuote.source}`;
		if(myRandomQuote.citation) {
			storeHTML += `<span class="citation">Citation: ${myRandomQuote.citation}</span>`;
		};	
		if(myRandomQuote.year) {
			storeHTML += `<span class="year">Year: ${myRandomQuote.year}</span>`;
		};	
		storeHTML += `</p>`;	
	document.getElementById('quote-box').innerHTML = storeHTML;
};

//The 'printQuote' is called to return the final HTML string 
printQuote();

/**
* The following code below was provided by Team Treehouse
* It allows the webpage to show another random quote object from the array when the 'Show another quote' button is clicked on in the webpage
*/
document.getElementById('load-quote').addEventListener("click", printQuote, false);