let quotes = [
	{quote: "A great man is alway willing to be little.",
	source: "-R.W. Emerson"
	},
	{quote: "The true soldier fights not because he hate what is in front of him, but because he loves what is behind him.", 
	source: "-G.K. Chesterton"
	},
	{quote: "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
	source: "-John Muir"
	},
	{quote: "We don't see things as they are, we see them as we are.",
	source: "-Anaïs Nin"
	},
	{quote: "They lived and laughed and loved and left.",
	source: "-James Joyce"
	},
];

function getRandomQuote() {
	let randomQuote = Math.floor(Math.random() * quotes.length);
	return quotes[randomQuote];
};



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