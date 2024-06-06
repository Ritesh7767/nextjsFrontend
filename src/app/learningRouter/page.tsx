'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import style from './learningRouter.module.css'

const learnRouter = () => {

    let router = useRouter()
  return (
    <>
        <h1 className={style.myh1}>click to go to home page</h1>
        <button onClick={() => router.push('/home')} >click me</button>
    </>
  )
}

export default learnRouter