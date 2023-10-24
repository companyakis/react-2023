import React, {useState} from 'react'

const ConditionalControl = () => {

  const [sayi, setSayi] = useState(0)
  
  return (
    
    <div>
    
      <h3>Kullanıcının girdiği sayının 100'den büyük mü küçük mü olduğunu sorguluyoruz</h3>
    
      <input
        value={sayi}
        onChange={(e) => {setSayi(e.target.value)}}
      />
          
      {sayi < 100 && <div>Sayı 100'den küçük!</div>}
          
      {sayi > 100 && <div>Sayı 100'den büyük!</div>}
        
    </div>
       
  )
       
}

export default ConditionalControl
