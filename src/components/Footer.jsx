import Score from './Score';
import Difficulty from './Difficulty';
import PropTypes from 'prop-types';

export default function Footer({ footerProp }) {
  return (
    <footer className="footer">
      <Score
        score={footerProp.score}
        bestScore={footerProp.bestScore}
      ></Score>
      <Difficulty handleDiffClick={footerProp.handleDiffClick}></Difficulty>
    </footer>
  );
}

Footer.propTypes = {
  footerProp: PropTypes.object,
};
