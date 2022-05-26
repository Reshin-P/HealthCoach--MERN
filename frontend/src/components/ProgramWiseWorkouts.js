import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './CategorywiseProgram.css'
import { Button } from '@mui/material'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Container } from 'react-bootstrap'
import GooglePayButton from '@google-pay/button-react'
import { blockUnblockWorkout } from '../actions/AdminActions'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWorkouts } from '../actions/workoutActions.js'



const ProgramWiseWorkouts = (props) => {

    const { blockWorkout: { blockworkout, loading, error } } = useSelector((state) => {
        return state
    })
    useEffect(() => {

    }, [blockworkout])
    const dispatch = useDispatch()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        height: '900px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const makepayment = () => {
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let { _id, workout, price, description, trainer, video, preview, isBlocked } = props.data
    const blochHandler = async () => {
        dispatch(blockUnblockWorkout(_id, "block"))

    }


    const unblockhHandler = async () => {

        dispatch(blockUnblockWorkout(_id, "unblock"))
        dispatch(getAllWorkouts())

    }
    return (
        <>
            <Row key={_id} className='SingleProgram mt-5 border  shadow'>
                <Col lg={3} md={3} sm={12} className='programLeft'>
                    <div className='ProgramVideo mb-2'>
                        <ReactPlayer width={'100%'} height={'200px'} url={preview} muted controls ></ReactPlayer>
                        {/* <img alt='' width={'100%'} height={'100%'} src='/images/youtube.png'></img> */}
                    </div>
                    <Link style={{ textDecorationLine: 'none' }} to={`/workout/${_id}`}> <h3 className='programName text-danger'> {workout}</h3></Link>
                </Col>
                <Col md={6} sm={12} className='Program-Description'>
                    <div>
                        <p>{description}</p>
                        <h4>Trainer : <LinkContainer style={{ color: 'orange' }} to={'/'}><span >{trainer}</span></LinkContainer></h4>
                    </div>
                </Col>
                <Col md={2} sm={12} className='program-Right'>
                    <div className='ml-4'>
                        <Link style={{ textDecorationLine: 'none' }} to={`/workout/${_id}`}>  <Button onClick={handleOpen} variant="contained">View</Button></Link>

                        <h1>₹{price}</h1>
                        {/* {isBlocked ? <Button color='warning' onClick={unblockhHandler} variant="contained">unBlock</Button>
                            : <Button color='error' onClick={blochHandler} variant="contained">Block</Button>} */}


                    </div>
                </Col>
            </Row>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Container className=' paymentcontainer '>
                        <Row className='mainrow'>
                            <Col className='col1' xl={12} lg={12} md={12} sm={12}>
                                <div className='workout'>                           <table width={'100%'} className="maintable" >
                                    <thead>
                                        <tr>
                                            <th width={'70%'}>Workout</th>
                                            <th width={'30%'}>price</th>

                                        </tr>
                                    </thead>
                                    <tbody className='tbody'>
                                        <td >
                                            <h5>90 days workout programs</h5>
                                            <h6>Trainers</h6>
                                        </td>
                                        <td>fdfddf</td>

                                    </tbody>
                                    <tbody>
                                        <td >
                                            <h5>Total</h5>
                                        </td>
                                        <td >5678</td>
                                    </tbody>
                                </table>

                                </div>

                                <div className='btn-div'>
                                    <div className='btn-inn'>
                                        <GooglePayButton
                                            environment="TEST"
                                            paymentRequest={{
                                                apiVersion: 2,
                                                apiVersionMinor: 0,
                                                allowedPaymentMethods: [
                                                    {
                                                        type: 'CARD',
                                                        parameters: {
                                                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                        },
                                                        tokenizationSpecification: {
                                                            type: 'PAYMENT_GATEWAY',
                                                            parameters: {
                                                                gateway: 'example',
                                                                gatewayMerchantId: 'exampleGatewayMerchantId',
                                                            },
                                                        },
                                                    },
                                                ],
                                                merchantInfo: {
                                                    merchantId: '12345678901234567890',
                                                    merchantName: 'Demo Merchant',
                                                },
                                                transactionInfo: {
                                                    totalPriceStatus: 'FINAL',
                                                    totalPriceLabel: 'Total',
                                                    totalPrice: price,
                                                    currencyCode: 'IND',
                                                    countryCode: 'IN',
                                                },
                                            }}
                                            onLoadPaymentData={paymentRequest => {

                                                makepayment(paymentRequest)

                                            }}
                                            onError={(err) => {
                                                console.log(err);
                                            }}
                                        />

                                    </div>


                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Box>
            </Modal>

        </>
    )
}

export default ProgramWiseWorkouts
