import React from 'react'
import Counter from './components/counter'
import Timer from './components/timer'
import Script from 'next/script'

const home = () => {
  return (
    <>
        {/* {alert("this is home page")} */}
        <Script>
            {/* console.log("this is home apge") */}
            alert("this is hoem page")
        </Script>
        <div>home</div>
        <Counter/>
        <Timer/>
    </>
  )
}

export default home