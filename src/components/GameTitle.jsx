import PropTypes from 'prop-types';

export default function GameTitle({ gameTitle }) {
  return <div className="game-title">{gameTitle}</div>;
}

GameTitle.propTypes = {
  gameTitle: PropTypes.string,
};
