import Alert from '@mui/material/Alert'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import HeaderTrainer from '../../components/Trainer/HeaderTrainer'
import SingleworkoutUserScreen from '../../components/Trainer/SingleworkoutUserScreen'
import ViewUserPhoto from '../../components/Trainer/ViewUserPhoto'
import ViewUserProfile from '../../components/Trainer/ViewUserProfile'
import axios from '../../util/axios'
import { useDispatch, useSelector } from 'react-redux'
import { getUserWorkouts } from '../../actions/TrainerActions'

const ViewUserScreen = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const [user, setUser] = useState({})
    const [error, setError] = useState(false)
    const { userworoutsTrainer: { userWorkouts } } = useSelector((state) => {
        return state
    })

    const singleUser = async () => {
        console.log("reache api call");
        try {
            const { data } = await axios.get(`/user/${params.id}`)
            console.log(data);
            setUser(data)
            console.log(user);

        } catch (error) {
            setError(error.response.data.message)
        }

    }
    useEffect(() => {
        if (user._id) {
            console.log("if");
            dispatch(getUserWorkouts(user._id))
        } else {
            singleUser()
        }
    }, [user])

    return (
        <>
            <HeaderTrainer />
            <Container className='border shadow' >
                {error ? <Alert variant="filled" severity="error">{error} </Alert> : <><ViewUserPhoto user={user} />
                    <ViewUserProfile user={user} /></>}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "93%" }}>
                        {userWorkouts.map((data) => (

                            <SingleworkoutUserScreen data={data} />
                        ))}

                    </div>
                </div>

            </Container>
        </>
    )
}

export default ViewUserScreen
