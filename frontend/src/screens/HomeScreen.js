import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { listprograms } from '../actions/programActions';
import { getBanners } from '../actions/userActions'
import Currosal from "../components/Currosal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProgramCards from "../components/ProgramCards";
import Trainers from "../components/Trainers";
import { PROGRAM_HEADING, TRAINER_HEADING } from '../constances/HomePageConstants';
import axios from '../util/axios.js';


const HomeScreen = () => {
  const dispatch = useDispatch()
  const programList = useSelector(state => state.programList)
  const { banner: { Banner, bannerLoading, bannerError } } = useSelector(state => state)
  const { loading, error, programs } = programList
  const [trainers, setTrainers] = useState([])
  useEffect(() => {

    dispatch(listprograms())
    dispatch(getBanners())

  }, [dispatch])

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/trainers')
      setTrainers(data)
    }
    fetch()
  }, [])
  return (
    <div>
      <Header />
      <Currosal />
      <Container fluid className="" style={{ width: "80%" }}>
        <Container style={{ display: 'flex', justifyContent: "center" }}>
          <h1 >{PROGRAM_HEADING}</h1>
        </Container>
        {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) :
          <Row className="Category-card  d-flex justify-content-around">
            {programs.map((programs) => (
              <Col className=" mt-4 " sm={12} md={6} lg={6} xl={4}>
                <ProgramCards programs={programs} />
              </Col>
            ))}
          </Row>
        }
      </Container>
      <Container className="mt-5" style={{ display: 'flex', justifyContent: "center" }}>
        <h1>{TRAINER_HEADING}</h1>
      </Container>
      <Container fluid className="" style={{ width: "90%" }} >
        <Row>
          {trainers.map((trainers) => (
            <Col className="" sm={12} md={6} lg={6} xl={3}>
              <Trainers trainers={trainers} />
            </Col>
          ))
          }
        </Row>
      </Container>
      <Footer />


    </div>
  );
};

export default HomeScreen;
