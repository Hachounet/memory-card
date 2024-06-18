import PropTypes from 'prop-types';

export default function NameContainer({ name = 'Poké Name' }) {
  return (
    <div className="name-container">
      <p>{name}</p>
    </div>
  );
}

NameContainer.propTypes = {
  name: PropTypes.string,
};
