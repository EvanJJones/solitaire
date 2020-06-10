import React, { useEffect } from "react"
import { motion } from "framer-motion"

const Card = ({ cardObject, position, cardClicked, scaleValue }) => {
  useEffect(() => {}, [])
  return (
    <motion.img
      src={`/${cardObject.image}`}
      alt={cardObject.name}
      className="card"
      width="125px"
      height="175px"
      style={{
        position: "absolute",
        zIndex: `${position}`,
        top: `${70 + position * 30}px`,
      }}
      onClick={() => cardClicked(cardObject)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: scaleValue }}
    />
  )
}
export default Card
