'use client'
import React, { useEffect, useState } from 'react'


const Timer = () => {

    let [timer, setTimer] = useState(0)

    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => setTimer(prev => prev + 1), 1000)

        return () => clearInterval(intervalId)
    }, [])

  return (
    <>
    <h1>timer {timer}</h1>
    </>
  )
}

export default Timer