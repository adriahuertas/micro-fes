import React, { useState } from 'react'

const Form = () => {
  const [number, setNumber] = useState(0)
  return (
    <div>

      <input type="number" placeholder="Enter number" onChange={(e) => setNumber(e.target.value)} />
      <p>Numero elegido: {number}</p>
    </div>
  )
}

export default Form