
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BurstModeIcon from '@mui/icons-material/BurstMode';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PersonIcon from '@mui/icons-material/Person';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CategoryIcon from '@mui/icons-material/Category';
import './Dashboard.css'
import { LinkContainer } from 'react-router-bootstrap';

const SidePanel = () => {
    const [bannershow, setBannerShow] = useState(false)
    const [programrshow, setprogramrShow] = useState(false)



    const showbanner = (value) => {
        setBannerShow(true)
    }

    const hidebanner = () => {
        setBannerShow(false)
    }

    const showprograms = (value) => {
        setprogramrShow(true)
    }

    const hideprograms = () => {
        setprogramrShow(false)
    }
    return (
        <Container fluid className=' adminContainer' >

            <Row className='row'>
                <Col className='col1' sm={2}>
                    <div className='dashboard'>
                        <h2 className='dash-head'>Dashborard</h2>
                    </div>
                    <div className='mt-5'>
                        <div className='tools'>
                            <div className='tool2'>
                                <AccessibilityNewIcon />
                                <LinkContainer to={'/workoutadmin'}>
                                    <p className='tool-name'>Workouts</p>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='tools'>
                            <div className='tool2'>
                                <EmojiPeopleIcon />
                                <LinkContainer to={'/managetrainer'}>
                                    <p className='tool-name'>Trainers</p>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='tools'>
                            <div className='tool2'>
                                <PersonIcon />
                                <LinkContainer to={'/manageuser'}>
                                    <p className='tool-name'>User</p></LinkContainer>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='tools'>
                            <div className='tool2'>
                                <ViewCarouselIcon />
                                <p className='tool-name'>Banner</p>
                            </div>

                            {bannershow ? <p onClick={hidebanner}><ArrowDropUpIcon fontSize='large' /></p> : <p onClick={showbanner}>     <ArrowDropDownIcon fontSize='large' /></p>}


                        </div>

                        {bannershow && <div className='hide'>
                            <LinkContainer to={'/addbanner'}><h5>Add bannershow</h5></LinkContainer>
                            <h5>Manage Banner</h5>

                        </div>}

                    </div>

                    {/* <div className='mt-2'>
                        <div className='tools'>
                            <div className='tool2'>
                                <BurstModeIcon />
                                <p className='tool-name'>Banner</p>
                            </div>

                            {bannershow ? <p onClick={hidebanner}><ArrowDropUpIcon fontSize='large' /></p> : <p onClick={showbanner}>     <ArrowDropDownIcon fontSize='large' /></p>}


                        </div>

                        {bannershow && <div className='hide'>
                            <h5>Add Banner</h5>
                            <h5>Manage Banner</h5>

                        </div>}

                    </div> */}


                    <div className='mt-2'>
                        <div className='tools'>
                            <div className='tool2'>
                                <CategoryIcon />
                                <p className='tool-name'>Programs</p>
                            </div>

                            {programrshow ? <p onClick={hideprograms}><ArrowDropUpIcon fontSize='large' /></p> : <p onClick={showprograms}>     <ArrowDropDownIcon fontSize='large' /></p>}


                        </div>

                        {programrshow && <div className='hide'>
                            <LinkContainer to={'/addprogram'}><h5>Add Programs</h5></LinkContainer>
                            <LinkContainer to={'/manageprograms'}><h5>Manage Programs</h5></LinkContainer>

                            <h5></h5>

                        </div>}

                    </div>

                </Col>
                <Col className='col2' sm={9}>
                    dfdf
                </Col>
            </Row>

        </Container >
    )
}

export default SidePanel
