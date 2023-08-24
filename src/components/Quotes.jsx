import { useState, useEffect } from 'react';
import style from '../styles/Quote.module.css';
import QuoteItem from './QuoteItem';

const Quotes = () => {
  const [quotes, setQuotes] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => () => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': 'CmTKM6B4Q5xkeSVvEc3FObE4vXWoMUq0yCAe0L0D' },
        });
        const quoteArray = await res.json();
        setQuotes(quoteArray[0]);
        console.log(quoteArray[0]);
        if (res.status === 200) {
          setIsLoading(false);
          setHasError(false);
        }
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, hasError]);
  // || Number(quotes.length === 0
  if (hasError) {
    return (
      <>
        <div className={style.quoteContainer}>
          <p>Connecting ...</p>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <div className={style.quoteContainer}>
          <p>Loading ...</p>
        </div>
      </>
    );
  }
  if (isLoading === false && hasError === false) {
    return (
      <>
        <ul className={style.quoteContainer}>
          <li key={quotes.author}>
            <QuoteItem quote={quotes.quote} author={quotes.author} />
          </li>
        </ul>
      </>
    );
  }
  return (
    <><p>there is an issue!</p></>
  );
};

export default Quotes;
