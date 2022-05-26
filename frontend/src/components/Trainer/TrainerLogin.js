import { Button, Grid, Paper, TextField } from "@mui/material";
import Alert from '@mui/material/Alert';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import './TrainerLogin.css';
import { useSelector, useDispatch } from 'react-redux'
import { trainerLoginAction } from '../../actions/TrainerActions'



function TrainerLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [mailError, setMailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginerror, setLoginerror] = useState()
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '25px 0' }
    const paperStyle = { padding: 20, height: 'auto', width: 380, margin: '20px auto' }

    const { username, password } = login
    const { trainerlogin: { trainerLogin, error, loading, sucess } } = useSelector((state) => {
        return state
    })

    useEffect(() => {
        const trainer = localStorage.getItem('trainer')
        if (trainer) {
            navigate('/trainer')
        }
        if (sucess) {

            navigate('/trainer')
        }
        if (sucess) {
            navigate('/trainer')
        }
    }, [sucess])



    const FormSubmit = async (input) => {
        dispatch(trainerLoginAction(username, password))


    }



    return (
        <div style={{ marginTop: '200px' }} >
            <Grid >

                <Paper elevation={10} style={paperStyle}>
                    <Grid><center>

                        <h2 style={{ fontFamily: 'sans-serif' }}> Trainer Sign In</h2>
                        <p>{mailError}</p>
                        <p>{passwordError}</p>
                    </center>
                    </Grid>
                    {error && <Alert severity="error">{error}</Alert>}
                    <form onSubmit={handleSubmit(FormSubmit)}>
                        <TextField id="standard-basic" label="username" variant="standard" value={login.username} name="username" {...register('username', { required: "username is required" })} onChange={(event) => setLogin({ ...login, username: event.target.value })} fullWidth />
                        {errors?.email && errors.email.message}
                        <TextField id="standard-basic" label="Password" type='password' name='password' {...register('password', { required: "password is required" })} variant="standard" value={login.password} onChange={(event) => setLogin({ ...login, password: event.target.value })} fullWidth />
                        {errors?.password && errors.password.message}
                        <Button type="submit" variant="contained" style={btnStyle} color="primary" fullWidth>Submit</Button>
                    </form>
                    Need a Registration? <Link to={'/trainersignup'}>Click Here</Link>
                    <Button type="submit" variant="outlined" className="mt-5" style={btnStyle} color="primary" fullWidth>  <img className="googleIcon" alt="" src="/images/google.png "></img> Login With Google</Button>
                </Paper>
            </Grid>
        </div>
    )
}
export default TrainerLogin