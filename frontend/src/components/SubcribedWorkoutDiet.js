import Button from '@mui/material/Button';
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { singleWorkout } from '../actions/workoutActions';
import { CONNECT_TRAINER, DIET_INSTRUCTION, DIET_PLAN, MESSAGE, VIDEO_CALL, WHATSAPP } from '../constances/SubscribedWorkout';
import './SubcribedWorkoutDiet.css';
const SubcribedWorkoutDiet = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const { user: { userInfo } } = useSelector((state) => {
        return state
    })
    let workoutdata = useSelector((state) => {
        return state.singleWorkout
    })
    const { loading, workout } = workoutdata


    useEffect(() => {
        dispatch(singleWorkout(params.id))
    }, [])
    return (
        <div className="mt-2">
            <Row className="diet_row" >
                <Col className="Diet1 gl-1 mt-4 " xl={6} lg={6} md={11} sm={11} xs={11}>
                    <div className="diet_description  ">
                        <h1 className="text-center"><u>{DIET_PLAN}</u></h1>
                        <p className="text-danger text-center">{DIET_INSTRUCTION}</p>
                        <div className="imagebox">
                            <img src={workout.dietimage} alt='' width={'80%'} height={'250px'}></img >
                        </div>
                        <div className="border mt-5 " >
                            <div className="mx-3">
                                <p className="mt-5 " width={'80%'}>{workout.diet1}</p>

                            </div>
                            <div className="mt-5 mx-2">
                                <p className="mt-5" width={'80%'}>{workout.diet2}</p>

                            </div>


                            {/* <h4>{PREFERED_FOOD}<span>:Salads banana</span></h4> */}
                        </div>

                    </div>
                </Col>
                <Col className="Diet2 gl-1 mt-4 " xl={4} lg={4} md={11} sm={11} xs={11}>
                    <div className="connect ">
                        <h2>{CONNECT_TRAINER}</h2>
                        <Button className="mt-5 btn1" variant="contained">{VIDEO_CALL}</Button>
                        <Link className='link-btn' to={`/chat/${userInfo._id}/${workout.trainerid}`}> <Button className="mt-5 btn2" variant="contained">{MESSAGE}</Button></Link>
                        <Button className="mt-5 btn3" variant="contained">{WHATSAPP}</Button>
                    </div>



                </Col>
            </Row>
        </div>

    )
}

export default SubcribedWorkoutDiet


