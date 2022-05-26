import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import { getSingleTrainer, getTrainerWorkouts } from '../../actions/TrainerActions.js'
import { acceptTrainers } from '../../actions/AdminActions.js'
import HeaderAdmin from '../../components/Admin/HeaderAdmin.js'
import Loader from '../../components/Loader'
import './AdminHomepageScreen.css'



const AcceptTrainerScreen = () => {

    const { singleTrainer: { singleTrainer, loading, error } } = useSelector((state) => {
        return state
    })
    const { acceptTrainer: { acceptTrainer, sucess, acceptLoading, errors } } = useSelector((state) => {
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

    const acceptHandler = async (id) => {
        dispatch(acceptTrainers(id))
    }
    const rejectHandler = async () => {
    }


    return (
        <>
            <HeaderAdmin />
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
                        </div>


                    </div>
                    <div>

                    </div>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={6} xl={12}>
                        <div className=' details'>


                            <div className='text'>
                                <div className='key'>
                                    <p>Email </p>
                                </div>
                                <div className='colon'>
                                    :
                                </div>
                                <div className='value'>
                                    <p>{singleTrainer.email}</p>
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
                                    <p>{singleTrainer.phone}</p>
                                </div>
                            </div>
                        </div>
                        {sucess && <Alert variant="outlined" severity="success">
                            {acceptTrainer}
                        </Alert>}
                    </Col>
                </Row>
                <Row>
                    <Col className='btncls' sm={12} md={12} lg={6} xl={12}>
                        <Button onClick={() => {
                            acceptHandler(singleTrainer._id)
                        }}
                            className='btn-accept'>Accept</Button>
                        {/* <Button onClick={() => {
                            rejectHandler(singleTrainer._id)
                        }}
                            className='btn-accept'>Reject</Button> */}

                    </Col>
                </Row>
                {/* <TrainerProfile /> */}

            </Container>
        </>
    )
}

export default AcceptTrainerScreen
