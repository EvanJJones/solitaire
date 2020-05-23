import React, { useEffect, useState } from "react"
import Card from "./Card"

const CardColumn = ({
  cardArray,
  playerCard,
  changeActiveCard,
  position,
  setTopCardObject,
}) => {
  const [topCard, setTopCard] = useState()
  const [currentCardArray, setCurrentCardArray] = useState()

  useEffect(() => {
    // initial set length of columns
    setCurrentCardArray(cardArray)
    setTopCard(cardArray[cardArray.length - 1].id)
    setTopCardObject(cardArray[cardArray.length - 1].value, position)
  }, [cardArray])

  const correctMove = card => {
    const filtered = currentCardArray.filter(item => item.id !== topCard)
    setCurrentCardArray(filtered)

    if (filtered.length) {
      setTopCard(filtered[filtered.length - 1].id)
      setTopCardObject(filtered[filtered.length - 1].value, position)
    } else {
      setTopCardObject(-1, position)
    }

    changeActiveCard(card)
  }

  const cardClicked = card => {
    if (
      card.value === playerCard.value + 1 ||
      (card.value === playerCard.value - 1 && topCard === card.id)
    ) {
      correctMove(card)
    } else if (
      card.value === 1 &&
      playerCard.value === 13 &&
      topCard === card.id
    ) {
      correctMove(card)
    } else if (
      card.value === 13 &&
      playerCard.value === 1 &&
      topCard === card.id
    ) {
      correctMove(card)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100px" }}>
      {currentCardArray &&
        currentCardArray.map((card, index) => {
          return (
            <Card
              key={card.id}
              cardObject={card}
              position={index}
              cardClicked={cardClicked}
              scaleValue={0.98}
            />
          )
        })}
    </div>
  )
}
export default CardColumn
