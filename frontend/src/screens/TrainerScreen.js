import React, { useEffect } from 'react'
import Header from '../components/Header'
import TrainersDetails from '../components/TrainersDetails.js'
import Footer from "../components/Footer";

const TrainerScreen = () => {
  useEffect(() => {
    console.log("eeded");
  })
  return (
    <div>
      <Header />
      <TrainersDetails />
      <Footer />
    </div>
  )
}

export default TrainerScreen
