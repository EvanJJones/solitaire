import React from "react"
import YAMLData from "../../content/cards.yaml"

console.log(YAMLData);

const CardList = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>Page</h1>
    <ul>
      {YAMLData.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.name}</li>
      })}
    </ul>
  </div>
)
export default CardList