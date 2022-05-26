import { Paper } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from "../components/Footer"
import Header from '../components/Header'
import SubcribedVIdeo from '../components/SubcribedVIdeo'
import SubcribedWorkoutDiet from '../components/SubcribedWorkoutDiet'


const SubcribedWorkouts = () => {
  return (
   <>
   <Header/>
       <Container  className='mt-5' >
         <Paper elevation={4}>
           <SubcribedVIdeo/>
           <SubcribedWorkoutDiet/>
           </Paper>
       </Container>
       <Footer/>
       </>

  )
}

export default SubcribedWorkouts
