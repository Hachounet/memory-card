import PropTypes from 'prop-types';

export default function ImgContainer({ imgSrc }) {
  return (
    <img
      src={imgSrc}
      alt=""
    />
  );
}

ImgContainer.propTypes = {
  imgSrc: PropTypes.string,
};
