import React, {useEffect, useState} from "react"
import CardColumn from "../components/CardColumn";
import Modal from "../components/Modal"


const CardArea = ({cardArray, columns, length, boardArray, updateRemaining}) => {
  const [columnArray, setColumnArray] = useState();
  const [activeCard, setActiveCard] = useState();
  const [remainingCards, setRemainingCards] = useState(-1);
  const [remainingDrawCards, setRemainingDrawCards] = useState(-1);
  const [topCards, setTopCards] = useState({});
  const [availableMoves, setAvailableMoves] = useState(-1);
  const [modalObject, setModalObject] = useState({isOpen: false, type: "lose"});

  useEffect(() => {
    const newColumnArray = [];
    let cardCount = 0
    
    for (let i=0; i < boardArray.length; i += 1) {
      const newColumn = cardArray.slice(0, boardArray[i]);
      cardArray.splice(0, boardArray[i]);
      
      newColumnArray[i] = newColumn;
      cardCount = cardCount + boardArray[i];
    }

    setColumnArray(newColumnArray);
    setRemainingCards(cardCount);
    updateRemaining(cardCount);

    setActiveCard(cardArray[cardArray.length -1]);
    cardArray.pop();
    setRemainingDrawCards(cardArray.length);
  }, [cardArray, columns, length, boardArray])

  useEffect(() => {
    checkMoves();
    console.log('useeffect ran')
    console.log(topCards)
  }, [topCards, activeCard])

  const drawCard = () => {
    if (cardArray.length > 0){
      setActiveCard(cardArray[cardArray.length -1]);
    
    cardArray.pop();
    setRemainingDrawCards(cardArray.length)
    } else {
      setRemainingDrawCards(0)
    }

  }

  const changeActiveCard = (card) => {
    setActiveCard(card);
    setRemainingCards(remainingCards - 1)
    updateRemaining(remainingCards - 1)
    if (remainingCards - 1 <= 0 ) {
      console.log("you win");
      setModalObject({isOpen: true, type: "win"})
    }
  }

  const checkMoves = () => {
    let moveCount = 0;
    for (let i=0; i < Object.values(topCards).length;  i++) {
      if (activeCard.value + 1 === topCards[i] || activeCard.value - 1 === topCards[i] ) {
        moveCount += 1;
      } else if (activeCard.value === 13 && topCards[i] === 1){
        moveCount += 1;
      } else if (activeCard.value === 1 && topCards[i] === 13){
        moveCount += 1;
      }
    }
    setAvailableMoves(moveCount);
    if (moveCount === 0 && remainingDrawCards === 0) {
      console.log('you lose')
      setModalObject({isOpen: true, type: "lose"})
    }
  }

  const setTopCardObject = (value, position) => {
    const topObject = topCards;

    topObject[position] = value;

    setTopCards(topObject);
  }

  return (
    <>
      <Modal isOpen={modalObject.isOpen} type={modalObject.type} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "90%", margin: "0", padding: "0"}}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", margin: "auto"}}>
          {columnArray && columnArray.map((cardColumnArray, index) => {
            return <CardColumn key={index} position={index} cardArray={cardColumnArray} playerCard={activeCard}    changeActiveCard={changeActiveCard} setTopCardObject={setTopCardObject} />
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <h1>{remainingDrawCards}</h1>
          <img src="/CardBack.png" onClick={() => drawCard()} alt="card back" width="125px" height="175px" />
          {activeCard && <img src={`/${activeCard.image}`} width="125px" height="175px" style={{ marginLeft: "40px"}}/>}
          <h1>{availableMoves}</h1>
        </div>
        
      </div>
    </>
  )
}
export default CardArea