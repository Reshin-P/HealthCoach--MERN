import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import HeaderAdmin from '../../components/Admin/HeaderAdmin'
import { getAllWorkoutsAdmin } from '../../actions/AdminActions.js'
import { useDispatch, useSelector } from 'react-redux'
import ManageSingleWorkout from '../../components/Admin/ManageSingleWorkout'

const AdminMangeWorkouts = () => {
    const dispatch = useDispatch()
    const { adminAllWorkouts: { adminAllWorkouts } } = useSelector((state) => {
        return state
    })
    useEffect(() => {
        dispatch(getAllWorkoutsAdmin())
    }, [])

    return (
        <>
            <HeaderAdmin />
            <Container>
                {adminAllWorkouts.map((smp) =>
                    <ManageSingleWorkout data={smp} />)}
            </Container>
        </>
    )
}

export default AdminMangeWorkouts
