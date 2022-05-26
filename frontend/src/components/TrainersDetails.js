import Alert from '@mui/material/Alert'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleTrainer, getTrainerWorkouts } from '../actions/TrainerActions.js'
import Loader from '../components/Loader'
import ProgramWiseWorkouts from './ProgramWiseWorkouts'
import './TrainersDetails.css'



const TrainersDetails = () => {

  const { singleTrainer: { singleTrainer, loading, error } } = useSelector((state) => {
    return state
  })
  const { trainerWorkout: { trainerWorkouts, workoutLoading, errors } } = useSelector((state) => {
    return state
  })
  const [streams, setStreams] = useState([])

  const dispatch = useDispatch()
  const params = useParams()
  useEffect(() => {
    dispatch(getSingleTrainer(params.id))
    dispatch(getTrainerWorkouts(params.id))


  }, [])
  useEffect(() => {
    if (singleTrainer) {
      setStreams(singleTrainer.streams)
    }
  }, [])



  return (
    <Container className="trainer-container border shadow   vh-100 mt-5">

      {loading ? Loader : <Row className='trainer_details_header mt-5'>
        <Col className='' sm={12} lg={3} xl={3}>
          <img src={singleTrainer.profilephoto} className='Trainer_S_image'></img>
        </Col >
        <Col className='Traiener_Name  ' sm={12} lg={3} xl={3}>
          <h1 className='text-danger'>{singleTrainer.name}</h1>

          {/* {singleTrainer?.streams.map((item) =>

            <p className='stream-name'>{item.name} </p>

          )} */}
        </Col>

      </Row>}
      <Row>
        <div className='Trainer_Innner_Box'>
          <div className='Trainer_About'>
            <h1>About</h1>
            <p>

              {singleTrainer.about}
            </p>
            <h2 className='Certifications'>Certifications</h2>

            {/* {singleTrainer?.certifications.map((item) =>

              <p className='stream-name'>{item.name} </p>

            )} */}
            {workoutLoading ? Loader : <div>
              {trainerWorkouts.map((smp) =>

                <ProgramWiseWorkouts data={smp} />)
              }
            </div>}
            {errors && <Alert variant="outlined" severity="info">
              This is an info alert — check it out!
            </Alert>}


          </div>


        </div>
      </Row>



    </Container>
  )
}

export default TrainersDetails
