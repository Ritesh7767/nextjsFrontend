'use client'
import React from 'react'

interface Params {
    id : string
}

const page = ({params}:{params : Params}) => {

    console.log(params)
  return (
    <div>page {params.id}</div>
  )
}

export default page