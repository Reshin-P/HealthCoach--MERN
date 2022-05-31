import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { CONNECT_TRAINER, MESSAGE, VIDEO_CALL, WHATSAPP } from '../../constances/SubscribedWorkout';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './TrainerProfile.css'
const TrainerProfile = () => {
    return (
        <>
            <Row className='row-profile' >
                <Col sm={12} lg={12} md={12} xl={712} className='Col1' >
                    <div className='details'>


                        <div className='text'>
                            <div className='key'>
                                <p>Email </p>
                            </div>
                            <div className='colon'>
                                :
                            </div>
                            <div className='value'>
                                <p>fdfd</p>
                            </div>
                        </div>

                        <div className='text'>
                            <div className='key'>
                                <p>Mob no </p>
                            </div>
                            <div className='colon'>
                                :
                            </div>
                            <div className='value'>
                                <p>fdd</p>
                            </div>
                        </div>








                    </div>

                </Col>
                {/* <Col xs={10} sm={10} lg={4} md={8} xl={4} className='Col2   ' >
                    <div className="connect ">
                        <h2>{CONNECT_TRAINER}</h2>
                        <Button className=" btn1" variant="contained">{VIDEO_CALL}</Button>
                        <Link className="mt-5 btn2" to={`/chat/${trainerInfo._id}/${user._id}`}> <Button variant="contained">{MESSAGE}</Button></Link>

                        <Button className="mt-5 btn3" variant="contained">{WHATSAPP}</Button>
                    </div>
                </Col> */}

            </Row>
        </>
    )
}

export default TrainerProfile
