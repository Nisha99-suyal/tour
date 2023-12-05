import React, { useEffect, useState } from 'react'

export default function InnerWidthCalC() {
    const[width,setWidth]=useState(window.innerWidth)

   useEffect(()=>{
    const handleWidth=()=>{ setWidth(window.innerWidth); }

    window.addEventListener('resize',handleWidth);
    return()=>{ window.removeEventListener('resize',handleWidth); }
   })

  return (
    <div className='calculateWidth'>
      <label htmlFor="text">CalCulate InnerWidth</label>
      <input type="number" value={width}/>
    </div>
  )
}
