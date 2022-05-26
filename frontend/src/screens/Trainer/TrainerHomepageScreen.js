import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import HeaderTrainer from '../../components/Trainer/HeaderTrainer'
import SingleWotkout from '../../components/Trainer/SingleWotkout'
import UserTableTrainerHomapage from '../../components/Trainer/UserTableTrainerHomapage'
import './TrainerHomepageScreen.css'

const TrainerHomepageScreen = () => {
  const navigate = useNavigate()

  return (
    <div>
      <HeaderTrainer />
      <Container className='border shadow trainerhomecontainer'>
        <div className='innertrainer'>
          <div className='inner'>
            <h2>Most Subcribed Workout</h2>
            <SingleWotkout />
            <SingleWotkout />
          </div>
          <div className='userTable'>
            <h2>Users List</h2>
            <UserTableTrainerHomapage />

          </div>

        </div>
      </Container>
    </div>
  )
}

export default TrainerHomepageScreen
