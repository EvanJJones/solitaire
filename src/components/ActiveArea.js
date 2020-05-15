import React, {useEffect, useState} from "react"
import ActiveCard from "./ActiveCard";
import DrawPile from "./DrawPile";


const ActiveArea = ({cards, getActiveCard}) => {
  const [drawPile, setDrawPile] = useState();
  const [activeCard, setActiveCard] = useState();

  useEffect(() => {
    setActiveCard(cards[cards.length -1]);
    getActiveCard(cards[cards.length -1]);
    cards.pop();
    setDrawPile(cards);
  }, [cards])

  const drawCard = () => {
    setActiveCard(cards[cards.length -1]);
    getActiveCard(cards[cards.length -1]);
    cards.pop();
    console.log(cards)
  }

  return (
    <div>
      <div onClick={() => drawCard()}>Draw Card</div>
      {activeCard && <ActiveCard card={activeCard} /> }
    </div>
  )
}
export default ActiveArea