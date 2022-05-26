import React, { useEffect } from 'react'
import './SubcribedVideo.css'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleWorkout } from '../actions/workoutActions'
import ReactPlayer from 'react-player'

const SubcribedVIdeo = () => {
    const dispatch = useDispatch()
    const params = useParams()
    let workoutdata = useSelector((state) => {
        return state.singleWorkout
    })
    const { loading, workout } = workoutdata

    useEffect(() => {
        dispatch(singleWorkout(params.id))
    }, [])
    return (
        <>
            <Row className='subcribed_video'>
                <Col xl={7} lg={7} md={7} className='sub_video'>
                    <ReactPlayer width={'100%'} height={'100%'} controls muted url={workout.video}>

                    </ReactPlayer>
                </Col>

            </Row>
            <Row className='sub_title'>
                <Col xl={7} lg={7} md={7}>
                    <h1>90 days workout programs</h1>
                </Col>
            </Row>
        </>
    )
}

export default SubcribedVIdeo
