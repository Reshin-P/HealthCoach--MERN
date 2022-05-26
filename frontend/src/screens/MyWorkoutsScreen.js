import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSubcribedWorkouts } from '../actions/userActions'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Myworkoutsingle from '../components/Myworkoutsingle'
const MyWorkoutsScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { subcribedworkouts } = useSelector((state) => state.subcribe)
  const { user: { userInfo } } = useSelector((state) => {
    return state
  })
  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
  }, [])
  useEffect(() => {
    dispatch(getSubcribedWorkouts())
  }, [])


  return (
    <>
      <Header />
      <Container className='min-vh-100'>
        {subcribedworkouts.map((smp) =>
          <Myworkoutsingle data={smp} />)}
      </Container>
      <Footer />
    </>

  )
}

export default MyWorkoutsScreen
