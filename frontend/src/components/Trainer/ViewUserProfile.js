import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { CONNECT_TRAINER, MESSAGE, VIDEO_CALL, WHATSAPP } from '../../constances/SubscribedWorkout';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ViewUserProfile.css';


const ViewUserProfile = ({ user }) => {

    const { trainerInfo: { trainerInfo } } = useSelector((state) => {
        return state
    })
    return (
        <Row className='row-profile' >
            <Col sm={12} lg={7} md={12} xl={7} className='Col1' >
                <div className='details'>
                    <div className='text'>
                        <div className='key'>
                            <p>Name </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>{user.name}</p>
                        </div>
                    </div>

                    <div className='text'>
                        <div className='key'>
                            <p>Email </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>{user.email}</p>
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
                            <p>{user.phone}</p>
                        </div>
                    </div>
                    <div className='text'>
                        <div className='key'>
                            <p>Age </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>{user.age}</p>
                        </div>
                    </div>


                    <div className='text'>
                        <div className='key'>
                            <p>Height </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>{user.height}</p>
                        </div>
                    </div>



                    <div className='text'>
                        <div className='key'>
                            <p>Weight </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>{user.weight}</p>
                        </div>
                    </div>

                    <div className='text'>
                        <div className='key'>
                            <p>Health Condition </p>
                        </div>
                        <div className='colon'>
                            :
                        </div>
                        <div className='value'>
                            <p>{user.healthcondition}</p>
                        </div>
                    </div>



                </div>

            </Col>
            <Col xs={10} sm={10} lg={4} md={8} xl={4} className='Col2   ' >
                <div className="connect ">
                    <h2>{CONNECT_TRAINER}</h2>
                    <Button className=" btn1" variant="contained">{VIDEO_CALL}</Button>
                    <Link className="mt-5 btn2" to={`/chat/${trainerInfo._id}/${user._id}`}> <Button variant="contained">{MESSAGE}</Button></Link>

                    <Button className="mt-5 btn3" variant="contained">{WHATSAPP}</Button>
                </div>
            </Col>

        </Row>
    )
}

export default ViewUserProfile
