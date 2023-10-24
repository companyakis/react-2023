//components folder içinde MyInfo.js adlı component oluşturduk

import React from 'react'

const MyInfo = ({ad, soyad, reactAmac, reactElestiri}) => {
  return (
    <>
      <div>
        Ben {ad} {soyad}. 
      </div>
      <div>
        Neden React sorusunun kısaca yanıtı: {reactAmac}
      </div>
      <div>
        React için eleştiriler: {reactElestiri}
      </div>
    </>
  )
}

export default MyInfo
