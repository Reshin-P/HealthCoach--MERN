import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
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
    );
}









// import { Container, Row, Col } from 'react-bootstrap'
// import React from 'react'
// import Header from '../components/Header';
// import './PaymentScreen.css'

// const PaymentScreen = () => {
//     return (
//         <>
//             <Header />
//             <Container className='border paymentcontainer shadow'>
//                 <Row className='mainrow'>
//                     <Col className='col1' xl={12} lg={12} md={12} sm={12}>
//                         <div className='workout'>
//                             <table width={'100%'} className="maintable" >
//                                 <thead>
//                                     <tr>
//                                         <th width={'70%'}>Workout</th>
//                                         <th width={'30%'}>price</th>

//                                     </tr>
//                                 </thead>
//                                 <tbody className='tbody'>
//                                     <td >
//                                         <h5>90 days workout programs</h5>
//                                         <h6>Trainers</h6>
//                                     </td>
//                                     <td>fdfddf</td>

//                                 </tbody>
//                                 <tbody>
//                                     <td >
//                                         <h5>Total</h5>
//                                     </td>
//                                     <td >5678</td>
//                                 </tbody>
//                             </table>

//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default PaymentScreen
