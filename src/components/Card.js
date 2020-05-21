import React, { useEffect } from "react"
import { motion } from "framer-motion"

const Card = ({ cardObject, position, cardClicked }) => {
  useEffect(() => {}, [])
  return (
    <motion.img
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    />
  )
}
export default Card
