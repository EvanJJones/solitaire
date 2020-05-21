import React, { useEffect } from "react"

const Card = ({ cardObject, position, cardClicked }) => {
  useEffect(() => {}, [])
  return (
    <img
      src={`/${cardObject.image}`}
      alt={cardObject.name}
      width="125px"
      height="175px"
      style={{
        position: "absolute",
        zIndex: `${position}`,
        top: `${70 + position * 25}px`,
      }}
      onClick={() => cardClicked(cardObject)}
    />
  )
}
export default Card
