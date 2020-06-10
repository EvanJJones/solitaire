import React, { useState, useEffect } from "react"

const Timer = ({ activeProp, resetProp, displayTime }) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function start() {
    setIsActive(!isActive)
  }

  function reset() {
    setSeconds(0)
    setMinutes(0)
    setIsActive(false)
  }

  useEffect(() => {
    if (activeProp === true) {
      start()
    } else if (activeProp === false) {
      displayTime(minutes, seconds)
      reset()
    }
    if (resetProp === true) {
      reset()
    }
  }, [resetProp, activeProp])

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        if (seconds + 1 >= 60) {
          setSeconds(0)
          setMinutes(minutes + 1)
        } else {
          setSeconds(ThisSeconds => ThisSeconds + 1)
        }
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  return (
    <h1 style={{ color: "black" }}>
      {minutes}
      <span style={{ color: "#3E4948" }}> Min </span>
      {seconds}
      <span style={{ color: "#3E4948" }}> Sec</span>
    </h1>
  )
}

export default Timer
