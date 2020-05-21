import React, { useEffect } from "react"

const ActiveCard = ({ card }) => {
  useEffect(() => {
    console.log(card)
  }, [])

  return (
    <div>
      <img
        src={`/${card.image}`}
        alt={card.name}
        width="100px"
        height="140px"
      />
    </div>
  )
}
export default ActiveCard
