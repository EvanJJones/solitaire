import React, { useEffect, useState } from "react"

const Modal = ({ isOpen, type }) => {
  const [text, setText] = useState("Nothing yet")

  useEffect(() => {
    if (type === "win") {
      setText("You Win")
    } else {
      setText("You Lose")
    }
  }, [type])
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            zIndex: "99",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              margin: "10% auto",
              width: "50%",
              height: "30%",
              background: "#edece7",
              opacity: "1",
              textAlign: "center",
              padding: "15px",
            }}
          >
            <h1>{text}</h1>
          </div>
        </div>
      )}
    </>
  )
}
export default Modal
