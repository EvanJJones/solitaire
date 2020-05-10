import React, {useEffect, useState} from "react"
import CardColumn from "../components/CardColumn";


const CardArea = ({cardArray, columns, length}) => {
  const [columnArray, setColumnArray] = useState();

  useEffect(() => {
    const newColumnArray = [];
    for (let i=0; i < columns; i += 1) {
      const newColumn = cardArray.slice(0, length);
      cardArray.splice(0, length);
      
      newColumnArray[i] = newColumn;
    }

    setColumnArray(newColumnArray);
  }, [cardArray, columns, length])
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", margin: "auto"}}>
      {columnArray && columnArray.map((cardColumnArray, index) => {
        return <CardColumn key={index} cardArray={cardColumnArray} />
      })}
    </div>
  )
}
export default CardArea