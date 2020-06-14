import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
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
          margin: "1% auto",
          width: "95%",
          height: "90%",
          background: "#edece7",
          opacity: "1",
          textAlign: "center",
          padding: "15px",
          border: "5px solid #CED893",
          borderRadius: "25px",
        }}
      >
        <h1 style={{ fontSize: "8rem", marginTop: "0", color: "#595959" }}>
          Golf Solitaire
        </h1>
        <div
          style={{
            width: "50%",
            textAlign: "left",
            margin: "auto",
          }}
        >
          <div className="rules-text">
            <span className="bold-word">Goal:</span>
            Remove all cards from the upper area
          </div>
          <div className="rules-text">
            <span className="bold-word">Sections: </span>
            Card Columns on upper area, only top card in each column is active.
            Active card is faceup on the bottom middle of the screen. Draw pile
            to left of the active card, click to draw, remaining cards displayed
            above.
          </div>
          <div className="rules-text">
            <span className="bold-word">Rules:</span>
            Click on a column with an active card that is either one lower or
            one higher than the current active card. When a correct move is made
            the active card is replaced by the clicked card. Try to think ahead
            and plan combos!
          </div>
        </div>
        <Link classname="main-link" to="/GamePage/">
          <div className="main-link">Play Game</div>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
