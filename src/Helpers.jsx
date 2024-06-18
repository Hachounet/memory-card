function chooseNumbersOfCards(number) {
  return number;
}

function checkDiff(difficulty) {
  if (difficulty === 'easy') {
    return 30;
  } else if (difficulty === 'medium') {
    return 75;
  } else {
    return 151;
  }
}

// This function will pick random Props based on difficulty to help render Cards in App.jsx
function pickProps(obj, diff) {
  console.log('creating new obj each time i click ?');
  const diffNumbs = checkDiff(diff);

  if (Object.keys(obj).length <= diffNumbs) {
    // If obj has fewer or equal properties than diffNumbs, return the entire obj. Should not happen
    console.log(obj);
    return obj;
  }

  const newObj = {};
  const keys = Object.keys(obj);

  // Pick diffNumbs random keys from obj
  while (Object.keys(newObj).length < diffNumbs) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    if (!Object.hasOwn(newObj, randomKey)) {
      newObj[randomKey] = obj[randomKey];
    }
  }
  console.log('newObj');
  console.log(newObj);
  return newObj;
}

function checkClick(value, stockedIDs) {
  if (stockedIDs.includes(value)) {
    return true;
  } else {
    return false;
  }
}

function createFullArray() {
  const array = [];
  let i = 1;
  while (array.length !== 151) {
    array.push(i);
    i++;
  }
  return array;
}

function winClick(e) {
  const card = e.currentTarget;

  setTimeout(() => {
    card.classList.toggle('card-win');
  }, 200);

  card.classList.toggle('card-win');
}

function looseClick(e) {
  const card = e.currentTarget;

  setTimeout(() => {
    card.classList.toggle('card-loose');
  }, 200);
  card.classList.toggle('card-loose');
}

export {
  pickProps,
  chooseNumbersOfCards,
  checkClick,
  createFullArray,
  winClick,
  looseClick,
};
