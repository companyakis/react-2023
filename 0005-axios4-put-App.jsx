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

  const updateCustomer = async (customerID, updatedData) => {

    await axios.put(`${MAIN_URL}/fake_data/${customerID}`, updatedData)
  }


  useEffect(() => {

    //getCustomerData()

    updateCustomer("6542", {"name": "Merve Bilge Köktürk"}) // now we want to update name


  }, []) 


  return (
    <>
      
    </>
  )
}

export default App
