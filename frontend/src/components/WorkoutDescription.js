import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singleWorkout } from '../actions/workoutActions'
import { COURSE_CONTENTS } from '../constances/CommonConstants'
import './WorkoutDescription.css'
const WorkoutDescription = ({ workut }) => {
  const params = useParams()
  const dispatch = useDispatch()
  const workoutdata = useSelector((state) => {
    return state.singleWorkout
  })
  const { price, workout, description, _id, video } = workoutdata.workout
  useEffect(() => {
    dispatch(singleWorkout(params.id))
  }, [dispatch])
  return (
    <Row className='workout_des_row'>
      <Col className='workout_des_col1' lg={6} md={12} xl={6}>
        <h1 className='mt-4'><u>{COURSE_CONTENTS}</u></h1>
        <div>
          <h6 className='des_text mt-4'>
            {description}


          </h6>
        </div>
      </Col>

      <Col className='workout_des_col2' lg={6} md={12} xl={6}>
        <div className='m-5'>
          <h2 className='mt-5'>Course Contents</h2>
          <li className='des_list'>Diet Plans</li>
          <li className='des_list'>30 hrs video</li>

          <li className='des_list'>scheduled workouts</li>

          <li className='des_list'>prerecorded workout</li>
          <li className='des_list'>online support</li>

        </div>
      </Col>
    </Row>
  )
}

export default WorkoutDescription
