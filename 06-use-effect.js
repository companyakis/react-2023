import {useState, useEffect} from 'react'

const Effects = () => {
    const [solidity, setSolidity] = useState(0)
    const [move, setMove] = useState(0)

    const handleSolidity = () => {
        setSolidity(solidity + 1)
    }

    const handleMove = () => {
        setMove(move + 1)
    }

    useEffect(() => {
        console.log("Hep çalışırım ve durmak bilmem!")
    })

    useEffect(() => {
        console.log("Bir defa çalışırım ve daha sonra çalışmam!")
    }, [])

    useEffect(() => {
        console.log("Yalnızca Solidity değeri değiştiğinde çalışırım!")
    }, [solidity])

    useEffect(() => {
       console.log("Yalnızca Move değeri değiştiğinde çalışırım!") 
    }, [move])

    useEffect(() => {
        console.log("Solidity veya Move değeri değiştiğinde çalışırım!")
    }, [solidity, move])


  return (
    <div>
        <div>
            <h1>Solidity Arttır</h1>
            <button onClick={handleSolidity}>Solidity +</button>
            <h3>Solidity değeri: {solidity}</h3>
        </div>
        <div>
            <h1>Move Arttır</h1>
            <button onClick={handleMove}>Move +</button>
            <h3>Move değeri: {move}</h3>
        </div>
      
    </div>
  )
}

export default Effects
