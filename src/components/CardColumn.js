import React, {useEffect, useState} from "react"
import Card from "../components/Card"


const CardColumn = ({cardArray, playerCard, changeActiveCard}) => {
  const [activeCard, setActiveCard] = useState();
  const [currentCardArray, setCurrentCardArray] = useState();

  useEffect(() => {
    //initial set length of columns
    setCurrentCardArray(cardArray);
    setActiveCard(cardArray[cardArray.length -1].id);
    console.log(cardArray[cardArray.length -1].id)
  }, [cardArray])


  const cardClicked = (card) => {
    console.log(card);
    console.log(playerCard);
    if (card.value === playerCard.value + 1 || card.value === playerCard.value - 1 && activeCard === card.id) {
      correctMove(card);
      
    } else if (card.value === 1 && playerCard.value === 13 && activeCard === card.id ) {
      correctMove(card);
    } else if (card.value === 13 && playerCard.value === 1 && activeCard === card.id ) {
      correctMove(card);
    } else {
      console.log("Wrong")
    }
  }

  const correctMove = (card) => {
    const filtered = currentCardArray.filter(item => item.id !== activeCard)
      setCurrentCardArray(filtered)
      
      if (filtered.length)
        setActiveCard(filtered[filtered.length -1].id);
      
      changeActiveCard(card);
  }

  return (
    <div style={{display: "flex", flexDirection: "column", width: "100px"}}>
      {currentCardArray && currentCardArray.map((card, index) => {
        return <Card key={index} cardObject={card} position={index} cardClicked={cardClicked}/>
      })}
    </div>
  )
}
export default CardColumn