import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from '@mui/material'
import ReactPlayer from 'react-player'
import './Myworkoutsingle.css'

const Myworkoutsingle = (props) => {
    const [user, setUser] = useState()
    useEffect(() => {
        let data = localStorage.getItem("userInfo")
        data = JSON.parse(data)
        setUser(data)

    }, [])
    let { _id, workout, price, description, trainer, video, preview } = props.data.workout

    return (

        <Row key={_id} className='SingleProgram mt-5 border  shadow'>
            <Col lg={3} md={3} className='programLeft'>
                <div className='ProgramVideo'>
                    <ReactPlayer width={'100%'} height={'200px'} url={preview} muted controls ></ReactPlayer>
                </div>
                <h3 className=' mt-2 programName text-danger'> {workout}</h3>
            </Col>
            <Col md={7} sm={12} className='Program-Description'>
                <div>
                    <p>{description}</p>
                    <h4>Trainer : <LinkContainer style={{ color: 'orange' }} to={'/'}><span >{trainer}</span></LinkContainer></h4>
                </div>
            </Col>
            <Col md={1} sm={12} className='program-Right'>
                <div className='btn-cls ml-4'>
                    <Link to={`/workoutsub/${_id}`} style={{ textDecoration: "none" }} >    <Button style={{ background: 'green' }} variant="contained">Start</Button>  </Link>
                </div>
            </Col>
        </Row>
    )
}

export default Myworkoutsingle
