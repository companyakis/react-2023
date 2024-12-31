
import { useEffect } from 'react'
import './App.css'
import axios from "axios"

const MAIN_URL = "http://localhost:3000"

function App() {

  const getCustomerData = async () => {
    //const response = await axios.get("http://localhost:3000/fake_data")
    const response = await axios.get(`${MAIN_URL}/fake_data`)
    console.log(response.data)
  }

  // const getUniqueCustomer = async (id) => {
  //   const response = await axios.get(`${MAIN_URL}/fake_data/${id}`)
  //   console.log(response.data)
  // }

  useEffect(() => {
    getCustomerData()
    //getUniqueCustomer(4296)
  }, []) 


  return (
    <>
      
    </>
  )
}

export default App
