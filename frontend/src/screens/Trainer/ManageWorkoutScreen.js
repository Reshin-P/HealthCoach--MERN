import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderTrainer from '../../components/Trainer/HeaderTrainer'
import ManageWorkoutTable from '../../components/Trainer/ManageWorkoutTable'

const ManageWorkoutScreen = () => {
  return (
    <>
    <HeaderTrainer/>
   <Container>
<ManageWorkoutTable/>
   </Container>
   </>
  )
}

export default ManageWorkoutScreen
