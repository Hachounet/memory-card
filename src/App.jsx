import { useState, useEffect, useMemo } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import CardContainer from './components/CardContainer';

import fetchAllData from './components/Data';

import './App.scss';
import {
  checkClick,
  createFullArray,
  pickProps,
  winClick,
  looseClick,
} from './Helpers';

export default function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [stockedIDs, setStockedIDs] = useState([]);

  const initialArrayIDs = createFullArray();

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || {}
  );

  const dataToPlayWith = useMemo(
    () => pickProps(data, difficulty),
    [data, difficulty]
  );

  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(data).length === 0) {
        const dataObj = await fetchAllData(initialArrayIDs, data); // Fetch all data required to play the game
        localStorage.setItem('data', JSON.stringify(data));
        setData(dataObj);
      }
    };
    fetchData();
  }, []); // This useEffect fetch all data during initialization and store it in LocalStorage

  useEffect(() => {
    resetStockedIds();
    resetScore();
  }, [difficulty]);

  // ------------- SCORE PART ------------

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const incrementBestScore = () => {
    if (bestScore === score) {
      setBestScore((prevBestScore) => prevBestScore + 1);
    } else {
      return;
    }
  };

  // ------------ END OF SCORE PART ----------

  // STOCKED ID PARTS

  const addIDtoStocked = (value) => {
    setStockedIDs((prevStockedsIDs) => {
      return [...prevStockedsIDs, value];
    });
  };

  const resetStockedIds = () => {
    setStockedIDs([]);
  };

  // END OF STOCKED ID PARTS

  // ------------ DIFF PART -----------

  const handleDiff = (e) => {
    const value = e.target.getAttribute('name');
    setDifficulty(value);
  };

  const underlineDifficulty = (element) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.classList.remove('underline'));
    buttons.forEach((button) => button.classList.add('no-border'));

    element.classList.remove('no-border');
    element.classList.add('underline');
  };

  const handleDiffClick = (e) => {
    handleDiff(e);
    underlineDifficulty(e.target);
  };

  const footerProp = {
    handleDiffClick: handleDiffClick,
    score: score,
    bestScore: bestScore,
  };

  // END OF DIFF PART

  // ------- CLICK CARD PART

  const handleClick = (e) => {
    const ID = e.currentTarget.getAttribute('data-id');

    const alreadyClicked = checkClick(ID, stockedIDs);
    if (alreadyClicked === false) {
      winClick(e);
      setTimeout(() => {
        addIDtoStocked(ID);
        incrementScore();
        incrementBestScore();
      }, 200);
    }
    if (alreadyClicked) {
      looseClick(e);
      setTimeout(() => {
        resetScore();
        resetStockedIds();
      }, 200);
    }
  };

  return (
    <>
      <Header></Header>
      {Object.keys(data).length > 6 ? (
        <CardContainer
          data={dataToPlayWith}
          stockedIDs={stockedIDs}
          onClickFn={handleClick}
        ></CardContainer>
      ) : (
        <p>Loading...</p>
      )}

      <Footer footerProp={footerProp}></Footer>
    </>
  );
}
