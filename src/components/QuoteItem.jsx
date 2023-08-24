import PropTypes from 'prop-types';
import style from '../styles/Quote.module.css';

const QuoteItem = ({ quotes }) => (
  <div>
    <p>{quotes.quote}</p>
    {/* <p className={style.author}>{quotes.author}</p> */}
  </div>
);

QuoteItem.propTypes = {
  quotes: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};
export default QuoteItem;
