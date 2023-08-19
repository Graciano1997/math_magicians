import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => () => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': 'CmTKM6B4Q5xkeSVvEc3FObE4vXWoMUq0yCAe0L0D' },
        });
        const quoteArray = await res.json();
        const random = quoteArray[0];
        setQuote(random);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);

  if (hasError) {
    return (
      <div className="quoteContainer">
        <p>There is an Error</p>
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
    <div className="quoteContainer">
      {quote && (<blockquote>{quote.quote}</blockquote>)}
      {quote && (<p>{`Author: ${quote.author} `}</p>)}
    </div>
  );
};

export default Quotes;
