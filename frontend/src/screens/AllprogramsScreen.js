import { Container } from 'react-bootstrap'
import React, { useEffect } from 'react'
import axios from '../util/axios'
import ProgramWiseWorkouts from '../components/ProgramWiseWorkouts'


const AllprogramsScreen = () => {
    useEffect(() => {
        const { data } = axios.get('/programs')
    }, [])
    return (
        <Container>
            program
        </Container>
    )
}

export default AllprogramsScreen
