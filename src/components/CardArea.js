import React, {useEffect, useState} from "react"
import CardColumn from "../components/CardColumn";
import ActiveArea from "../components/ActiveArea";


const CardArea = ({cardArray, columns, length, boardArray}) => {
  const [columnArray, setColumnArray] = useState();
  const [remainingCardArray, setRemainingCardArray] = useState();
  const [activeCard, setActiveCard] = useState();

  useEffect(() => {
    const newColumnArray = [];
    for (let i=0; i < boardArray.length; i += 1) {
      const newColumn = cardArray.slice(0, boardArray[i]);
      cardArray.splice(0, boardArray[i]);
      
      newColumnArray[i] = newColumn;
    }

    setColumnArray(newColumnArray);
    setRemainingCardArray(cardArray);

    setActiveCard(cardArray[cardArray.length -1]);
    cardArray.pop();
    setRemainingCardArray(cardArray);
  }, [cardArray, columns, length, boardArray])

  const drawCard = () => {
    setActiveCard(cardArray[cardArray.length -1]);
    cardArray.pop();
    setRemainingCardArray(cardArray);
  }

  const changeActiveCard = (card) => {
    setActiveCard(card);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100%", margin: "0", padding: "0"}}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", margin: "auto"}}>
        {columnArray && columnArray.map((cardColumnArray, index) => {
          return <CardColumn key={index} cardArray={cardColumnArray} playerCard={activeCard} changeActiveCard={changeActiveCard} />
        })}
      </div>
      <div>
        <div onClick={() => drawCard()}>Draw a card</div>
        {activeCard && <img src={`/${activeCard.image}`} width="100px" height="140px"/>}
      </div>
    </div>
  )
}
export default CardArea