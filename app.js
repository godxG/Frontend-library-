import React from 'react';
import ReactDOM from 'react-dom';

const quoteData = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
  { text: "If life were predictable it would cease to", author: "someone"}]

const  QuoteBox  = ({quote , handleNewQuote}) =>{ return ( <div id="quote-box">
<p id="text">{quote.text}</p>
<h2 id="author">{quote.author}</h2>
<div className="actions">
<button className="button" id="new-quote" onClick={handleNewQuote}>New Quote</button>
<a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">Tweet</a>
</div>
 </div> )
}

const getRandomIndex = () =>{
return  Math.floor(Math.random() * quoteData.length)};

const App = () => {
const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])

  const handleNewQuote = () => {
  setQuote(quoteData[getRandomIndex()])
  }
  
  
  return (
<div className="main">
 <QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
  </div>
  )
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
