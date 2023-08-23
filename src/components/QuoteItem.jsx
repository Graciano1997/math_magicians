import PropTypes from 'prop-types';
import style from '../styles/Quote.module.css';

const QuoteItem = ({ author, quote }) => (
  <div>
    <p>{quote}</p>
    <p className={style.author}>{author}</p>
  </div>
);

QuoteItem.propTypes = { author: PropTypes.string.isRequired, quote: PropTypes.string.isRequired };
export default QuoteItem;
