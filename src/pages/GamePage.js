import React, {useEffect, useState} from "react"
import CardArea from "../components/CardArea"
import cardList from "../../content/cards.yaml"


const GamePage = () => {
  const [shuffledCards, setShuffledCards] = useState();

  useEffect(() => {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    
        // swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    console.log("useeffect ran")
    shuffle(cardList);
    setShuffledCards(cardList);
  }, []);

  return (
    <>
      {shuffledCards && <CardArea cardArray={shuffledCards} columns={7} length={5} />}
    </>
  )
}
export default GamePage