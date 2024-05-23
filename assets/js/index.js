const Quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
  
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        quote: "Money and success don’t change people; they merely amplify what is already there.",
        author: "Will Smith"
    },
    {
        quote: "Not how long, but how well you have lived is the main thing.",
        author: "Seneca"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    }
];


function generate() {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    const quote = Quotes[randomIndex].quote;
    const author = Quotes[randomIndex].author;

    document.getElementById("quotedata").textContent = `"${quote}"`;
    document.getElementById('authorname').textContent = `-- ${author} --`;
}
