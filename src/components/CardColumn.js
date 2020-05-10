import React, {useEffect, useState} from "react"
import Card from "../components/Card"


const CardColumn = ({cardArray}) => {
  const [activeCard, setActiveCard] = useState();
  const [currentCardArray, setCurrentCardArray] = useState();

  useEffect(() => {
    //initial set length of columns
    setCurrentCardArray(cardArray);
    setActiveCard(cardArray.value);
  }, [])

  const cardClicked = () => {

  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {currentCardArray && currentCardArray.map((card, index) => {
        return <Card key={index} cardObject={card} position={index} />
      })}
    </div>
  )
}
export default CardColumn