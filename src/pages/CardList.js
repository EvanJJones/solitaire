import React from "react"
import YAMLData from "../../content/cards.yaml"


const CardList = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>Page</h1>
    <ul>
      {YAMLData.map((data, index) => {
        return <li key={`content_item_${index}`} className={index}><img src={`/${data.image}`} alt={data.name} height="140px" width="100px" style={{ position: "absolute", zIndex: `${index}`, top: `${index * 15}`}}></img></li>
      })}
    </ul>
  </div>
)
export default CardList