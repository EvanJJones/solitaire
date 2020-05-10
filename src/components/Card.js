import React, {useEffect} from "react"


const Card = ({cardObject, position}) => {
  useEffect(() => {
    console.log(cardObject);
  }, [cardObject])
return <img src={`/${cardObject.image}`} alt={cardObject.name} width="100px" height="140px" style={{ position: "absolute", zIndex: `${position}`, top: `${position * 25}px`}} />
}
export default Card