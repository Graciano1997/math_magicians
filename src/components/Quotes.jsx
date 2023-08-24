import { useState, useEffect } from 'react';
import style from '../styles/Quote.module.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => () => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': 'CmTKM6B4Q5xkeSVvEc3FObE4vXWoMUq0yCAe0L0D' },
        });
        const quoteArray = await res.json();
        setQuotes({ quote: quoteArray[0].quote, author: quoteArray[0].author });
      } catch (error) {
        setHasError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {isLoading && (
        <div className={style.quoteContainer}>
          <p>Loading ...</p>
        </div>
      )}

      {hasError && (
        <div className={style.quoteContainer}>
          <p>Connection issues ...</p>
        </div>
      )}

      {quotes && (
        <ul className={style.quoteContainer}>
          <li key={quotes.author}>
            <div>
              <p>{quotes.quote}</p>
              <p className={style.author}>{quotes.author}</p>
            </div>
          </li>
        </ul>
      )}

    </>
  );
};

export default Quotes;
