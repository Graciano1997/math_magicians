import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => () => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': 'CmTKM6B4Q5xkeSVvEc3FObE4vXWoMUq0yCAe0L0D' },
        });
        const quoteArray = await res.json();
        setQuotes(quoteArray);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(true);
      }
    };
    fetchData();
  }, [setQuotes, setIsLoading]);

  if (hasError || Number(quotes.length === 0)) {
    return (
      <div className="quoteContainer">
        <p>Something went wrong</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="quoteContainer">
        <p>Loading ...</p>
      </div>
    );
  }
  return (
    <ul className="quoteContainer">
      {quotes.map(({ author, quote }) => (<li key={author}>{quote}</li>))}
    </ul>
  );
};

export default Quotes;
