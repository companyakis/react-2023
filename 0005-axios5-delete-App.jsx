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

  const deleteCustomerDataByID = async (customerID) => {

    axios.delete(`${MAIN_URL}/fake_data/${customerID}`)
  }

  useEffect(() => {

    //getCustomerData()

    deleteCustomerDataByID("4296")

  }, []) 


  return (
    <>
      
    </>
  )
}

export default App
