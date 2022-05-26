import GooglePayButton from '@google-pay/button-react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { singleWorkout, updateProductReset } from '../actions/workoutActions';
import axios from '../util/axios';
import './PaymentScreen.css';
import './WorkoutVideo.css';



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

const WorkoutVideo = () => {
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const params = useParams()
  const dispatch = useDispatch()
  let workoutdata = useSelector((state) => {
    return state.singleWorkout
  })
  const { user: { userInfo } } = useSelector((state) => {
    return state
  })


  useEffect(() => {
    dispatch(singleWorkout(params.id))

    return () => {
      dispatch(updateProductReset())
    }
  }, [dispatch])

  const { price, workout, preview, trainer } = workoutdata.workout
  let item = workoutdata.workout


  const makepayment = async (paymentdetails) => {

    const body = {
      paymentdetails,
      item
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      const response = await axios.post('/payment', body, config)
      if (response.status == 200) {
        navigate('/')

      }
    } catch (error) {

    }

  }


  return (
    <>

      <div className="workout_outer">
        <Row className='Workout_video' >
          <Col className='workout_video1' lg={6} md={12} xl={6} >
            <div className='workout_inner'  >
              <ReactPlayer url={preview} controls />          </div>
          </Col>
          <Col className='workout_video2' lg={6} md={12} xl={6}>
            <div className='workout_inner_Right '>
              <h2> {workout}</h2>
              <h4 className='mt-5'>Video Length:2hrs </h4>
              <h4 className='mt-5'>Trainer : John </h4>
              <div className='price'>
                <h3 className='mt-5'>Price : {price}</h3>
                {userInfo ? <GooglePayButton
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
                /> : <Link to={'/login'}>   <Button style={{ color: 'black', backgroundColor: 'white', height: '50px', textDecorationLine: 'none' }}>Login To Buy</Button></Link>
                }
              </div>
              <div>

              </div>
            </div>

          </Col>
        </Row>
      </div>
      <div>

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
                  <div className='workout'>
                    <table width={'100%'} className="maintable" >
                      <thead>
                        <tr>
                          <th width={'70%'}>Workout</th>
                          <th width={'30%'}>price</th>

                        </tr>
                      </thead>
                      <tbody className='tbody'>
                        <td >
                          <h5>{workout}</h5>
                          <h6>{trainer}</h6>
                        </td>
                        <td>{price}</td>

                      </tbody>
                      <tbody>
                        <td >
                          <h5>Total</h5>
                        </td>
                        <td >{price}</td>
                      </tbody>
                    </table>

                  </div>

                  <div className='btn-div'>
                    <div className='btn-inn'>
                      <Button style={{ background: "white" }} fullWidth variant="">
                        <img width={'100%'} src='/images/pay.png'></img>
                      </Button>

                    </div>


                  </div>
                </Col>
              </Row>
            </Container>
          </Box>
        </Modal>
      </div >



    </>
  )
}

export default WorkoutVideo
