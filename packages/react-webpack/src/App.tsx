import React, { useState } from 'react'
import '@/style.css'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <span className="mr-1">tsx: { count }</span>
      <button onClick={() => { setCount(count+1) }}>++</button>
    </>
  )
}