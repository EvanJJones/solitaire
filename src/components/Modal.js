import React, { useEffect, useState } from "react"

const Modal = ({ isOpen, type, resetGame, finalTime }) => {
  const [text, setText] = useState("Nothing yet")

  useEffect(() => {
    console.log(finalTime)
    if (type === "win") {
      setText("You Win")
    } else {
      setText("You Lose")
    }
  }, [type])
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            zIndex: "99",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              margin: "10% auto",
              width: "50%",
              height: "30%",
              background: "#edece7",
              opacity: "1",
              textAlign: "center",
              padding: "15px",
              border: "5px solid #CED893",
              borderRadius: "25px",
            }}
          >
            <h1 style={{ fontSize: "4rem", marginTop: "0" }}>{text}</h1>
            {finalTime && (
              <h1 style={{ color: "black" }}>
                {finalTime.minutes}
                <span style={{ color: "#3E4948" }}> Min </span>
                {finalTime.seconds}
                <span style={{ color: "#3E4948" }}> Sec</span>
              </h1>
            )}
            <button
              className="modal-button"
              type="button"
              onClick={() => resetGame()}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default Modal
