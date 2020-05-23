import React, { useEffect, useState } from "react"
import CardArea from "../components/CardArea"
import cardList from "../../content/cards.yaml"

const GamePage = () => {
  const [shuffledCards, setShuffledCards] = useState()
  const [boardArray] = useState([4, 4, 4, 4, 4, 4, 4])
  const [remainingCards, setRemainingCards] = useState(0)

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i

      // swap elements array[i] and array[j]
      // eslint-disable-next-line no-param-reassign
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  const resetGame = () => {
    const temp = [...cardList]
    shuffle(temp)
    setShuffledCards(temp)
  }

  useEffect(() => {
    resetGame()
  }, [])

  const updateRemaining = num => {
    setRemainingCards(num)
  }

  return (
    <div
      style={{
        backgroundColor: "#F5F2DF",
        height: "100vh",
        width: "100%",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        style={{
          height: "50px",
          backgroundColor: "#CED893",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-around",
        }}
      >
        <h2 style={{ color: "black", margin: ".5rem" }}>Golf Solitaire</h2>
        <button type="button" onClick={() => resetGame()}>
          Reset Game
        </button>
        <h2 style={{ margin: ".5rem" }}>{remainingCards}</h2>
      </div>
      {shuffledCards && (
        <CardArea
          cardArray={shuffledCards}
          columns={7}
          length={5}
          boardArray={boardArray}
          updateRemaining={updateRemaining}
          resetGame={resetGame}
        />
      )}
    </div>
  )
}
export default GamePage
