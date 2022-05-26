import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProgramWiseWorkouts from '../components/ProgramWiseWorkouts'
import { Container } from 'react-bootstrap'
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom'
import axios from '../util/axios'
import Alert from '@mui/material/Alert';




const CategoryWiseProgramScreen = () => {

    const params = useParams()
    const [nodata, setNodata] = useState()
    const [workout, setWorkout] = useState([])
    useEffect(() => {

        const fetchworkout = async () => {
            try {
                const { data } = await axios.get(`/program/program/${params.id}`)
                setWorkout(data)
            }
            catch (error) {

                setNodata(error)
            }
        }
        fetchworkout()
    }, [])
    return (
        <div>
            <Header />
            <Container className='border shadow ' style={{ minHeight: "900px" }}>
                {nodata && <Alert severity="info">This is an info alert — check it out!</Alert>}
                {workout.map((smp) =>
                    <ProgramWiseWorkouts data={smp} />)}
            </Container>
            <Footer />


        </div>
    )
}

export default CategoryWiseProgramScreen
