import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import './AddProgramForm.css'
import { addProgram } from '../../actions/AdminActions.js'
import { useDispatch, useSelector } from 'react-redux'
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';


const AddProgramForm = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { addProgram: { program, loading, error, success } } = useSelector((state) => {
        return state
    })

    useEffect(() => {

    }, [loading])
    const FormSubmit = async (data) => {
        const formData = new FormData()
        formData.set('name', data.name)
        formData.set('image', data.image[0])

        dispatch(addProgram(formData))
    }
    return (
        <Container className='border mt-5 maincontainer shadow'>

            <h1 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Add Program</h1>
            <Row className='div1' >
                <Col sm={12} md={12} lg={7} xl={7} className='div2'>
                    <form onSubmit={handleSubmit(FormSubmit)}>
                        <div className='div4'>
                            <div className='div3'>
                                <h5 className='  mt-4'>Name</h5>
                            </div>
                            <div className='div3'>

                                <TextField className='mt-4' fullWidth id="outlined-basic" label="Program Name" variant="outlined" {...register('name', {
                                    required: "UserName Requried", pattern: {
                                        value: /^[a-zA-Z " "]+$/g,
                                        message: "Only Characters"
                                    }
                                })} />

                            </div>
                        </div>
                        {errors.name && <p style={{ marginLeft: '50%', color: 'red' }}>{errors.name.message}</p>}
                        <div className='div4 mt-5'  >
                            <div className='div3'>
                                <h5 className='mt-3'  >Image</h5>

                            </div>
                            <div className='div3'>
                                <label htmlFor="upload-photo">
                                    <input
                                        accept='.png,.jpg'
                                        style={{ display: 'none' }}
                                        id="upload-photo"
                                        name="upload-photo"
                                        type="file" {...register('image', { required: "Image Required" })}
                                    />

                                    <Button style={{ marginLeft: '20%' }} color="secondary" variant="contained" component="span">
                                        Choose Image
                                    </Button>

                                </label>

                            </div>

                        </div>
                        {errors.image && <p style={{ marginLeft: '70%', color: 'red' }}>{errors.image.message}</p>}
                        {loading ? <div className='m-5'> <LinearProgress /></div> : <button type='submit' className='addbtn'>Add</button>}
                        {error && <Alert variant="outlined" severity="error"> {error}</Alert>}
                        {success && <Alert variant="outlined" severity="success">Program Added </Alert>}
                    </form>
                </Col>
            </Row>


        </Container>
    )
}

export default AddProgramForm
