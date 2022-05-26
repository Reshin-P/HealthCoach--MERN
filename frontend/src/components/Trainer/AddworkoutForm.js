import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import axios from '../../util/axios';
import './AddworkoutForm.css';
import { useNavigate } from 'react-router-dom'




const AddworkoutForm = () => {

    const [program, setProgram] = useState()
    useEffect(() => {

        const trainerinfo = localStorage.getItem('trainer')
        if (!trainerinfo) {
            navigate('/')
        }
        fetchPrograms()
    }, [])

    const fetchPrograms = async () => {
        const { data } = await axios.get('/program')
        let programs = []
        data.forEach((item) => {
            programs.push(item.programname)

        })

        setProgram(programs)
    }

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {

        let trainerinfo = localStorage.getItem('trainer')
        trainerinfo = JSON.parse(trainerinfo)
        setLoading(true)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${trainerinfo.token}`,
            }
        }
        const formData = new FormData()
        formData.set('workout', data.workout)
        formData.set('video', data.video[0])
        formData.set('price', data.price)
        formData.set('description', data.description)
        formData.set('diet1', data.diet1)
        formData.set('diet2', data.diet2)
        formData.set('dietimage', data.dietimage[0])
        formData.set('preview', data.preview[0])
        formData.set('program', data.program)



        // formData.append('preview',data.preview)

        const response = await axios.post('/workout', formData, config)
        if (response.data) {
            navigate('/trainer')
        }
        setLoading(false)

    }
    return (

        <Container className="FormContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="inputRows mt-5">
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                        <TextField label='Enter the name' fullWidth name='workout' {...register("workout", {
                            required: 'Name Required', pattern: {
                                value: /^[A-Z 0-9 a-z " "]*$/,
                                message: "Only Characters"
                            }
                        })} />
                        {errors.workout && <p className='text-danger'>{errors.workout.message}</p>}
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                        <TextField label="Enter the price" type={'number'} fullWidth name='price' {...register('price', {
                            required: "Price required", maxLength: {
                                value: 5,
                                message: "Price range is high"
                            }
                        })} />
                        {errors.price && <p className="text-danger">{errors.price.message}</p>}
                    </Col>
                </Row>
                <Row className="inputRows mt-1">
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                        <Autocomplete fullWidth
                            disablePortal
                            id="combo-box-demo"
                            options={program}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField fullWidth {...params} label="program" name="program" {...register('program', { required: "Choose program" })} />}
                        />
                        {errors.program && <p className='text-danger'>{errors.program.message}</p>}

                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                        <TextField label='Enter the description' fullWidth name='description' {...register("description", {
                            required: 'Description Required',
                            maxLength: {
                                value: 750,
                                message: "description length is high"
                            },
                            min: {
                                value: 300,
                                message: "Minimum Length 70 words"
                            }
                        })} />
                        {errors.description && <p className='text-danger'>{errors.description.message}</p>}
                    </Col>
                </Row>
                <Row className="inputRows mt-1" >
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >
                        <TextField id="outlined-basic" type={'file'} fullWidth label='Select video' variant="standard" name="video" {...register('video', { required: "Choose Video" })} />
                        {errors.video && <p className='text-danger'>{errors.video.message}</p>}
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol">
                        <TextField id="outlined-basic" type={'file'} fullWidth label="Select preview" variant="standard" name="preview" {...register('preview', { required: "Choose preview" })} />
                        {errors.preview && <p className='text-danger'>{errors.preview.message}</p>}
                    </Col>
                </Row>
                <input value={{}} hidden></input>
                <Row className="inputRows mt-1" >
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >
                        <TextField id="outlined-basic" fullWidth label="Diet paragraph 1" variant="outlined" name="diet1" {...register('diet1', {
                            required: "Enter the Diet", minLength: {
                                value: 300,
                                message: 'Minimum 300 Words',
                            },
                            maxLength: {
                                value: 680,
                                message: 'Maximum words 120'
                            }
                        })} />
                        {errors.diet1 && <p className='text-danger'>{errors.diet1.message}</p>}
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >
                        <TextField id="outlined-basic" fullWidth label="Diet paragraph 2" variant="outlined" name="diet2" {...register('diet2', {
                            required: "Enter the Diet", minLength: {
                                value: 300,
                                message: 'Minimum 300 Words',
                            },
                            maxLength: {
                                value: 680,
                                message: 'Maximum words 120'
                            }
                        })} />
                        {errors.diet2 && <p className='text-danger'>{errors.diet2.message}</p>}
                    </Col>
                </Row>
                <Row className="inputRows mt-1" >
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >
                        <TextField id="outlined-basic" fullWidth label="Diet Image" type={'file'} variant="outlined" name="dietimage" {...register('dietimage', {
                            required: "Enter the Diet"
                        })} />
                        {errors.dietimage && <p className='text-danger'>{errors.dietimage.message}</p>}
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="inputcol"  >

                    </Col>
                </Row>
                <Button type="submit" className='mb-5' variant="contained">Submit</Button>
                {loading && <LinearProgress />}
            </form>
        </Container>
    )
}

export default AddworkoutForm