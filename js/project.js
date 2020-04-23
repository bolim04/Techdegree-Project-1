let quotes = [
	{quote: "A great man is alway willing to be little.",
	source: "--R.W. Emerson"
	},
	{quote: "The true soldier fights not because he hate what is in front of him, but because he loves what is behind him.", 
	source: "--G.K. Chesterton"
	},
	{quote: "When we try to pick out anything by itself, we find it hitched to everything else in the Universe.",
	source: "--John Muir",
	citation: "Book: A Thousand-Mile Walk to the Gulf. Author: John Muir",
	year: "1916"
	},
	{quote: "We don't see things as they are, we see them as we are.",
	source: "--Anaïs Nin"
	},
	{quote: "They lived and laughed and loved and left.",
	source: "-- James Joyce"
	},
];

function getRandomQuote() {
	let randomQuote = Math.floor(Math.random() * quotes.length);
	return quotes[randomQuote];
};

function printQuote(){
	let myRandomQuote = getRandomQuote();
	let storeHTML = 
		<p class="quote"> `A random quote: '${myRandomQuote.quote}'` </p>;
		<p class="source"> `--Source: ${myRandomQuote.source}` ;
		if(myRandomquote.citation) {
			storeHTML += <span class="citation">`--Citation: ${myRandomQuote.citation}`</span>
		};
		if(myRandomQuote.year) {
			storeHTML += <span class="year">`--Year: ${myRandomQuote.year}`</span>
		};
		</p>
};

document.getElementbyId('quote-box').innerHTML = storeHTML;

/*// 
Used for testing random quote function
console.log(getRandomQuote());
*/

/*// 
Used for testing 'quotes' array
for (let prop in quotes) {
	console.log(quotes[prop]);
};
*/