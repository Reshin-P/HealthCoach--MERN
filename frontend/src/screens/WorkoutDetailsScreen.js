import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from '../components/Header';
import WorkoutDescription from "../components/WorkoutDescription";
import WorkoutVideo from "../components/WorkoutVideo";



const WorkoutDetailsScreen = () => {
    return (
        <>
            <Header />
            <Container className="border  shadow mt-5"   >
                <div className="m-5">
                    <WorkoutVideo />
                    <WorkoutDescription />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default WorkoutDetailsScreen



