/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react"
import CardArea from "../components/CardArea"
import Timer from "../components/Timer"
import cardList from "../../content/cards.yaml"
import Modal from "../components/Modal"

const GamePage = () => {
  const [shuffledCards, setShuffledCards] = useState()
  const [boardArray] = useState([4, 4, 4, 4, 4, 4, 4])
  const [remainingCards, setRemainingCards] = useState(0)
  const [timerStatus, setTimerStatus] = useState(false)
  const [finalTime, setFinalTime] = useState({ minutes: 0, seconds: 0 })
  const [modalObject, setModalObject] = useState({
    isOpen: false,
    type: "lose",
  })

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
    setModalObject({ isOpen: false, type: "win" })
    setFinalTime({ minutes: 0, seconds: 0 })
    setTimerStatus(true)
  }

  useEffect(() => {
    resetGame()
    setTimerStatus(true)
  }, [])

  const updateRemaining = num => {
    setRemainingCards(num)
  }

  const displayTime = (mins, secs) => {
    setFinalTime({ minutes: mins, seconds: secs })
    console.log(mins, secs)
  }
  const gameOver = won => {
    if (won) {
      setModalObject({ isOpen: true, type: "win" })
      setTimerStatus(false)
    } else {
      setModalObject({ isOpen: true, type: "lose" })
      setTimerStatus(false)
    }
  }

  return (
    <>
      <Modal
        isOpen={modalObject.isOpen}
        type={modalObject.type}
        resetGame={resetGame}
        finalTime={finalTime}
      />
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
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h2 style={{ color: "black", margin: ".5rem" }}>Golf Solitaire</h2>
          <Timer activeProp={timerStatus} displayTime={displayTime} />
          
          <h2 style={{ margin: ".5rem" }}>
            <span style={{ color: "#3E4948", fontSize: "1.25rem" }}>
              Cards Remaining: 
            </span>
            {remainingCards}
          </h2>
          <button className="button" type="button" onClick={() => resetGame()}>
            Reset Game
          </button>
        </div>
        {shuffledCards && (
          <CardArea
            cardArray={shuffledCards}
            columns={7}
            length={5}
            boardArray={boardArray}
            updateRemaining={updateRemaining}
            resetGame={resetGame}
            gameOver={gameOver}
          />
        )}
      </div>
    </>
  )
}
export default GamePage
