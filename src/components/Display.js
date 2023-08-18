import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="box display">
    <span className="displayNumber">{result}</span>
  </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};
export default Display;
