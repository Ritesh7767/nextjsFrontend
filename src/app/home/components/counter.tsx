'use client'

import { useState } from "react"

const Counter = () => {

    let [counter, setCounter] = useState(0)
  return (
    <>
        <h1 className="text-lg font-bold text-center">counter value :- {counter}</h1>
        <button onClick={() => setCounter(prev => prev + 1)} >+</button>
        <button onClick={() => setCounter(prev => prev - 1)} >-</button>
    </>
  )
}

export default Counter