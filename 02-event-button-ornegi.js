import React from 'react'

const ClickMe = () => {

    const handleClick = () => {
        alert("Günaydın kullanıcı. Tasarım React Native bölümünde ele alınacak!")
    }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ClickMe
