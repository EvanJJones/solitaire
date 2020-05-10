import React, {useEffect, useState} from "react"
import Card from "../components/Card"


const CardColumn = ({cardArray}) => {
  const [activeCard, setActiveCard] = useState();
  const [currentCardArray, setCurrentCardArray] = useState();

  useEffect(() => {
    //initial set length of columns
    setCurrentCardArray(cardArray);
    setActiveCard(cardArray[cardArray.length -1].id);
    console.log(cardArray[cardArray.length -1].id)
  }, [])

  const cardClicked = (id, value) => {
    console.log(id, value)
    if (activeCard === id) {
      setCurrentCardArray(currentCardArray.filter(item => item.id !== activeCard))
    } else {
      console.log("Wrong")
    }
  }

  return (
    <div style={{display: "flex", flexDirection: "column", width: "100px"}}>
      {currentCardArray && currentCardArray.map((card, index) => {
        return <Card key={index} cardObject={card} position={index} cardClicked={cardClicked}/>
      })}
    </div>
  )
}
export default CardColumn