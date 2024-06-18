import PropTypes from 'prop-types';

export default function Difficulty({ handleDiffClick }) {
  return (
    <div className="difficulty-container">
      <button
        onClick={handleDiffClick}
        name="easy"
        className="no-border"
      >
        Easy (30)
      </button>
      <button
        onClick={handleDiffClick}
        name="medium"
        className="no-border"
      >
        Medium(75)
      </button>
      <button
        onClick={handleDiffClick}
        name="full"
        className="no-border"
      >
        Full(151)
      </button>
    </div>
  );
}

Difficulty.propTypes = {
  handleDiffClick: PropTypes.func,
};
