import Image from 'next/image'
import React from 'react'

const learningImage = () => {
  return (
    <div className='w-1/2 m-auto border-2 border-black h-[40vh]'>
      <Image src={'/image/img1.jpg'} alt='dog image' sizes='100vw' width={100} height={100}/>
    </div>
  )
}

export default learningImage