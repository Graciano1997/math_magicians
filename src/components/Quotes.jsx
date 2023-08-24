import { useState, useEffect } from 'react';
import style from '../styles/Quote.module.css';
import QuoteItem from './QuoteItem';

const Quotes = () => {
  const [quotes, setQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => () => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': 'CmTKM6B4Q5xkeSVvEc3FObE4vXWoMUq0yCAe0L0D' },
        });
        const quoteArray = await res.json();
        if (res.status === 200) {
          setQuotes(quoteArray[0]);
        }
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  console.log(quotes);
  console.log(isLoading);
  console.log(hasError);

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
          <QuoteItem quotes={quotes} />
        </li>
      </ul>
      )}

    </>
  );
};

export default Quotes;
