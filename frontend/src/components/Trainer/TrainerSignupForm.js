import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import './TrainerSignupForm.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { TRAINER_SIGNUP_HEADING } from '../../constances/CommonConstants'
import Autocomplete from '@mui/material/Autocomplete';
import axios from '../../util/axios';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const certificates = [
    { name: "ISSA" },
    { name: "NCSF" },
    { name: "ACE" },
    { name: "NASM" },


];
const streamslist = [
    { name: 'Yoga Trainer' },
    { name: 'Gym Trainer' },
    { name: 'Cardio Trainer' },
    { name: 'Meditation Trainer' },

]
const TrainerSignupForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signuperror, setsignuperror] = useState(false)
    const [certifications, setCertifications] = useState([])
    const [streams, setStreams] = useState([])

    const onSubmit = async (data) => {

        const { name, username, email, phone, password, about } = data;
        try {
            const response = await axios.post('trainers/trainers', { name, username, email, phone, password, certifications, streams, about })
            if (response.data) {
                navigate('/trainerLogin')
            }
        } catch (err) {

            setsignuperror(err.response.data.message)

        }
    }
    return (
        <Container className='form_container' >
            <Paper elevation={3} style={{ marginTop: 100, minHeight: 650 }}>
                <Typography variant='h4' component='h6' textAlign='center' >{TRAINER_SIGNUP_HEADING}</Typography>
                {signuperror && <Alert severity="error">{signuperror}</Alert>}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Grid container spacing={6} margin='auto' >
                        <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
                            <TextField label='Enter the name' sx={{ width: '90%' }} name='name' {...register("name", {
                                required: 'Name Required', pattern: {
                                    value: /^[a-zA-Z]+$/g,
                                    message: "Only Characters"
                                }
                            })} />
                            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                        </Grid>
                        <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
                            <Autocomplete
                                style={{ width: '90%' }}
                                multiple
                                id="tags-outlined"
                                onChange={(event, value) => setCertifications(value)}
                                options={certificates}
                                getOptionLabel={(option) => option.name}
                                filterSelectedOptions
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        label="Select Certifications"
                                        placeholder="certificates"
                                    />
                                }
                            />
                            {errors.Certifications && <p className='text-danger'>{errors.Certifications.message}</p>}
                        </Grid>
                        <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
                            <TextField label='Enter the username' sx={{ width: '90%' }} name='username' {...register('username', {
                                required: "UserName Requried", pattern: {
                                    value: /^[a-zA-Z]+$/g,
                                    message: "Only Characters"
                                }
                            })} />
                            {errors.username && <p className='text-danger'>{errors.username.message}</p>}
                        </Grid>
                        <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
                            <Autocomplete
                                style={{ width: '90%' }}
                                multiple
                                id="tags-outlined"
                                onChange={(event, value) => setStreams(value)}
                                options={streamslist}
                                getOptionLabel={(option) => option.name}
                                filterSelectedOptions
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        label="select streams"
                                        placeholder="streams"
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} lg={6} xl={6} md={6} sm={6} >
                            <TextField label='Enter the MobNo' sx={{ width: '90%' }} {...register('phone', {
                                required: "Mobile number required", minLength: {
                                    value: 10,
                                    message: "Enter 10 digit number"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Enter 10 digit number"
                                }
                            })} />
                            {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}      </Grid>
                        <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
                            <TextField className='about' label='Enter the About' name='about' sx={{ width: '90%' }} {...register('about', {
                                require: "About Required",
                                minLength: {
                                    value: 70,
                                    message: "minum words 70"
                                },
                                maxLength: {
                                    value: 400,
                                    message: "maximum words 75"
                                }
                            },

                            )} />
                            {errors.about && <p className='text-danger'>{errors.about.message}</p>}
                        </Grid>

                        <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
                            <TextField label='Enter the Email' sx={{ width: '90%' }} {...register('email', {
                                required: "Email Required", patter: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter the Correct Email"
                                }
                            })} />
                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                            {/* {signuperror && <p className='text-danger'>{signuperror}</p>} */}


                        </Grid>

                        <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>

                        </Grid>

                        <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
                            <TextField label='Enter the Password' name='password' sx={{ width: '90%' }} {...register('password', {
                                required: 'Password is Required',
                                minLength: {
                                    value: 8,
                                    message: 'Minimun 8 Digit '
                                }
                            })} />
                            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                        </Grid>









                        <Button type='submit' variant='contained' size='large' sx={{ margin: 'auto', marginTop: 5 }} >Submit</Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default TrainerSignupForm



