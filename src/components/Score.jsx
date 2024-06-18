import PropTypes from 'prop-types';

export default function Score({ score, bestScore }) {
  return (
    <div className="score-container">
      <p>Score : {score}</p>
      <p>Best score : {bestScore}</p>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number,
};
