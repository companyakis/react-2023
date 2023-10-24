import React, { useState } from 'react'

const Counter = () => {

 const [sayac, setSayac] = useState(0)

 const sayacYukari = () => {
    setSayac(sayac + 1)
 }

 const sayacAsagi = () => {
    setSayac(sayac - 1)
    
 }
  return (
    <div>
        <div><button onClick={sayacYukari}>Sayaç +</button></div>

        <div>Sayaç değeri: {sayac}</div>

        <div><button onClick={sayacAsagi}>Sayaç -</button></div> 
    </div>
  )
}

export default Counter
