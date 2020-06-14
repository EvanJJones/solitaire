import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CardColumn from "./CardColumn"

const CardArea = ({
  cardArray,
  columns,
  length,
  boardArray,
  updateRemaining,
  gameOver,
}) => {
  const [columnArray, setColumnArray] = useState()
  const [activeCard, setActiveCard] = useState()
  const [remainingCards, setRemainingCards] = useState(-1)
  const [remainingDrawCards, setRemainingDrawCards] = useState(-1)
  const [topCards, setTopCards] = useState({})
  const [cardPileImage, setCardPileImage] = useState("/CardBack.png")

  useEffect(() => {
    const resetCards = () => {
      setColumnArray()
      setActiveCard()
      setRemainingCards(-1)
      setRemainingDrawCards(-1)
      setTopCards({})
      setCardPileImage("/CardBack.png")
    }
    resetCards()
    const newColumnArray = []
    let cardCount = 0

    for (let i = 0; i < boardArray.length; i += 1) {
      const newColumn = cardArray.slice(0, boardArray[i])
      cardArray.splice(0, boardArray[i])

      newColumnArray[i] = newColumn
      cardCount += boardArray[i]
    }

    setColumnArray(newColumnArray)
    setRemainingCards(cardCount)
    updateRemaining(cardCount)

    setActiveCard(cardArray[cardArray.length - 1])
    cardArray.pop()
    setRemainingDrawCards(cardArray.length)
  }, [cardArray, columns, length, boardArray])

  const drawCard = () => {
    if (cardArray.length > 0) {
      setActiveCard(cardArray[cardArray.length - 1])

      cardArray.pop()
      setRemainingDrawCards(cardArray.length)
    } else {
      setRemainingDrawCards(0)
    }
  }

  const changeActiveCard = card => {
    setActiveCard(card)
    setRemainingCards(remainingCards - 1)
    updateRemaining(remainingCards - 1)
    if (remainingCards - 1 <= 0) {
      gameOver(true)
    }
  }

  const checkMoves = () => {
    let moveCount = 0
    for (let i = 0; i < Object.values(topCards).length; i += 1) {
      if (
        activeCard.value + 1 === topCards[i] ||
        activeCard.value - 1 === topCards[i]
      ) {
        moveCount += 1
      } else if (activeCard.value === 13 && topCards[i] === 1) {
        moveCount += 1
      } else if (activeCard.value === 1 && topCards[i] === 13) {
        moveCount += 1
      }
    }
    if (remainingDrawCards === 0) {
      setCardPileImage("/BlankCard.png")
    }

    if (moveCount === 0 && remainingDrawCards === 0 && remainingCards > 0) {
      gameOver(false)
    }
  }

  useEffect(() => {
    checkMoves()
  }, [topCards, activeCard])

  const setTopCardObject = (value, position) => {
    const topObject = topCards

    topObject[position] = value

    setTopCards(topObject)
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "90%",
          margin: "0",
          padding: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            margin: "auto",
          }}
        >
          {columnArray &&
            columnArray.map((cardColumnArray, index) => (
              <CardColumn
                key={cardColumnArray[0].id}
                position={index}
                cardArray={cardColumnArray}
                playerCard={activeCard}
                changeActiveCard={changeActiveCard}
                setTopCardObject={setTopCardObject}
              />
            ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h1 style={{ margin: "0", padding: "0" }}>{remainingDrawCards}</h1>
            <motion.img
              src={cardPileImage}
              onClick={() => drawCard()}
              alt="card back"
              width="125px"
              height="175px"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
          {activeCard && (
            <motion.img
              src={`/${activeCard.image}`}
              alt={activeCard.name}
              className="card"
              width="125px"
              height="175px"
              style={{ marginLeft: "40px", marginTop: "36px" }}
              whileTap={{ rotate: 5 }}
            />
          )}
        </div>
      </div>
    </>
  )
}
export default CardArea
