import { useState, useEffect } from 'react';
import style from '../styles/Quote.module.css';
import QuoteItem from './QuoteItem';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
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
        setQuotes(quoteArray);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuotes, setIsLoading]);

  if (hasError || Number(quotes.length === 0)) {
    return (
      <div className={style.quoteContainer}>
        <p>Connecting ...</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={style.quoteContainer}>
        <p>Loading ...</p>
      </div>
    );
  }
  return (
    <ul className={style.quoteContainer}>
      {quotes.map(({ author, quote }) => (
        <li key={author}>
          <QuoteItem quote={quote} author={author} />
        </li>
      ))}
    </ul>
  );
};

export default Quotes;
