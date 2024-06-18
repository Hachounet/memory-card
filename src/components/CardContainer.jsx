import Card from './Card';
import PropTypes from 'prop-types';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function CardContainer({ data, stockedIDs, onClickFn }) {
  const entries = Object.entries(data);

  const selectedEntries = [];
  const usedIndexes = new Set();

  while (selectedEntries.length < Math.min(3, stockedIDs.length)) {
    const randomIndex = Math.floor(Math.random() * stockedIDs.length);
    const id = stockedIDs[randomIndex];
    if (!usedIndexes.has(id)) {
      selectedEntries.push([id, data[id]]);
      usedIndexes.add(id);
    }
  }

  while (selectedEntries.length < 6) {
    const randomIndex = Math.floor(Math.random() * entries.length);
    const [key, value] = entries[randomIndex];
    if (!usedIndexes.has(key)) {
      selectedEntries.push([key, value]);
      usedIndexes.add(key);
    }
  }

  const shuffledEntries = shuffleArray([...selectedEntries]); // Clone the array before shuffling
  console.log('THIS IS STOCKED IDS');
  console.log(stockedIDs);
  console.log('other stuff');
  console.log(shuffledEntries);

  return (
    <div className="card-container">
      {shuffledEntries.map(([key, value]) => (
        <Card
          key={key}
          dataId={key}
          imgSrc={value.sprite}
          name={value.name}
          onClickFn={onClickFn}
        />
      ))}
    </div>
  );
}

CardContainer.propTypes = {
  data: PropTypes.object.isRequired,
  stockedIDs: PropTypes.array,
  onClickFn: PropTypes.func.isRequired,
};
