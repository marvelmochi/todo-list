const quotes = [
  {
    quote: "One day or day one,\n It’s your choice.",
    author: "Paulo Coelho",
  },
  {
    quote: "All progress takes place \noutside the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    quote:
      "Great things are not done by impulse, \nbut by a series of small things \nbrought together.",
    author: "Vincent Van Gogh",
  },
  {
    quote: "It does not matter how slowly you go\n as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote:
      "Most people are about as happy\n as they make up their minds to be.",
    author: "Abraham Lincoln",
  },
  {
    quote: "You are never old to set another goal\n or to dream a new dream.",
    author: "C. S. Lewis",
  },
  {
    quote:
      "The regret after not doing something is\n bigger than that of doing something.",
    author: "Paul Arden",
  },
  {
    quote:
      "Start by doing what’s necessary,\n then what’s possible,\n and suddenly you are doing the impossible.",
    author: "Saint Francis Assisi",
  },
  {
    quote:
      "As a well-spent day brings happy sleep,\n so life well used brings happy death.",
    author: "Leonardo da Vinci",
  },
  {
    quote: "Once we know our own weaknesses\n they cease to do us any harm.",
    author: "Georg C. Lichtenberg",
  },
];

const quoteBox = document.getElementById("life-quote");

const paintQuote = () => {
  console.log();
  quoteBox.innerText = quotes[Math.floor(Math.random() * 10)].quote;
};
paintQuote();
