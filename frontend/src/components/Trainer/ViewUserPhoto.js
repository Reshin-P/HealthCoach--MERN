import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './ViewUserPhoto.css'

const ViewUserPhoto = ({ user }) => {
    return (
        <>
            <Row className='photoRow' style={{ height: 'auto' }}>
                <Col className='photoCol1' xl={3} lg={3} md={12} sm={12}>
                    <img className='profilePhoto' alt='' src={user.profilephoto}></img>
                </Col>
                <Col className='photoCol2 ' xl={4} lg={4} md={12} sm={12}>
                    <h1 className='user-name'>{user.name}</h1>
                </Col>
            </Row>
        </>
    )
}

export default ViewUserPhoto
