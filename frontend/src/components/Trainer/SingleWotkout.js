import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from '@mui/material'
import './SingleWotkout.css'

const SingleWotkout = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        let data = localStorage.getItem("userInfo")
        data = JSON.parse(data)
        setUser(data)

    }, [])
    // let { _id, workout, price, description, trainer, video, preview } = props.data.workout

    return (

        <Row width={'100%'} className='SingleProgram mt-5 border  shadow'>
            <Col lg={3} md={3} className='programLeft'>
                <div className='ProgramVideo'>
                    <img alt='' width={'100%'} height={'100%'} src='/images/youtube.png'></img>
                </div>
                <h3 className=' mt-2 programName text-danger'> f</h3>
            </Col>
            <Col md={7} sm={12} className='Program-Description'>
                <div>
                    <p>fd</p>
                    <h4>Trainer : <LinkContainer style={{ color: 'orange' }} to={'/'}><span >fd</span></LinkContainer></h4>
                </div>
            </Col>
            <Col md={1} sm={12} className='program-Right'>
                <div className='btn-cls ml-4'>
                    <Button style={{ background: 'green' }} variant="contained">Start</Button>
                </div>
            </Col>
        </Row>
    )
}

export default SingleWotkout
