import ImgContainer from './ImgContainer';
import NameContainer from './NameContainer';
import PropTypes from 'prop-types';

export default function Card({ imgSrc, dataId, name, onClickFn }) {
  const correctName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return (
    <div
      className="card"
      onClick={onClickFn}
      data-id={dataId}
    >
      <ImgContainer imgSrc={imgSrc}></ImgContainer>
      <NameContainer name={correctName}></NameContainer>
    </div>
  );
}

Card.propTypes = {
  dataId: PropTypes.string,
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  onClickFn: PropTypes.func,
};
