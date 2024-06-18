async function fetchAPI(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: 'default',
    });
    if (!response.ok) {
      throw new Error(`HTTP Error! Status : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Problem with fetch operation', error);
  }
}

export default async function fetchAllData(array, existingData) {
  console.log('I am supposed to be launched only once');
  const obj = { ...existingData };

  const unfetchedIDs = checkDataExistence(array, obj);

  for (const elementID of unfetchedIDs) {
    try {
      const individualData = await fetchAPI(
        `https://pokeapi.co/api/v2/pokemon/${elementID}`
      );
      const usefulData = extractData(individualData);
      obj[elementID] = {
        name: usefulData.name,
        sprite: usefulData.sprite,
      };
    } catch (error) {
      console.error(`Failed to fetch data for ${elementID}`, error);
    }
  }

  return obj;
}

function checkDataExistence(array, data) {
  const arrayIDUnfetched = [];

  for (let elementID of array) {
    // Convert both elementID and the keys of data to strings for comparison
    if (Object.hasOwn(data, elementID.toString())) {
      return;
    } else {
      arrayIDUnfetched.push(elementID);
    }
  }
  console.log('I am checking Data Existence');
  console.log(arrayIDUnfetched);
  return arrayIDUnfetched;
}

function extractData(data) {
  const name = data.name;
  const sprite = data.sprites.front_default;
  return { name, sprite };
}
