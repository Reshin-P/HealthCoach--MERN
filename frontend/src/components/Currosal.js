import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

const Currosal = () => {

  const { banner: { Banner, bannerLoading, bannerError } } = useSelector(state => state)

  return (
    <>
      {bannerLoading ? (<Loader />) : bannerError ? (<Container style={{ minHeight: '500px' }}><Alert close style={{ marginTop: '100px' }} variant="filled" severity="info">{bannerError}</Alert></Container>)
        : (<Container fluid style={{ width: "80%" }} className="my-5">
          <Row>
            <Col lg={12} md={12}>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    height={'650px'}
                    className="d-block w-100"
                    src={Banner.image1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 style={{ color: Banner.titlecolor }}>{Banner.title}</h3>
                    <p style={{ color: Banner.subtitlecolor }}>{Banner.subtitle}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    height={'650px'}
                    className="d-block w-100"
                    src={Banner.image2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 style={{ color: Banner.titlecolor }}>{Banner.title}</h3>
                    <p style={{ color: Banner.subtitlecolor }}>{Banner.subtitle}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height={'650px'}
                    className="d-block w-100"
                    src={Banner.image3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3 style={{ color: Banner.titlecolor }}>{Banner.title}</h3>
                    <p style={{ color: Banner.subtitlecolor }}>{Banner.subtitle}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

        </Container>)}

    </>
  )
}

export default Currosal
