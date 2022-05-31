import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Autocomplete from '@mui/material/Autocomplete';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addBanner } from '../../actions/AdminActions.js';
import './AddBannerForm.css';


const AddBannerForm = () => {
    const dispatch = useDispatch()
    const [imageFpreview, setImageFpreview] = useState(null)
    const [imageSpreview, setImageSpreview] = useState(null)
    const [imageTpreview, setImageTpreview] = useState(null)
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { addBaner: { loading, bannerSucess, error } } = useSelector((state => state))

    const [colors, setColor] = useState(['white', 'black', 'red', 'green', 'blue', 'orange', 'yellow'])
    useEffect(() => {



    }, [imageFpreview, imageSpreview, imageTpreview])

    const FormSubmit = async (data) => {

        const formData = new FormData()
        formData.set('title', data.title)
        formData.set('subtitle', data.subtitle)
        formData.append('image1', image1)
        formData.append('image2', image2)
        formData.append('image3', image3)
        formData.set('titlecolor', data.titlecolor)
        formData.set('subtitlecolor', data.subtitlecolor)
        dispatch(addBanner(formData))


    }
    return (
        <Container className='border mt-5 maincontainer shadow'>

            <h1 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Add Banner</h1>
            <Row className='div1' >
                <Col sm={12} md={12} lg={7} xl={7} className='div2'>
                    <form onSubmit={handleSubmit(FormSubmit)}>
                        <div className='div4'>
                            <div className='div3'>
                                <h5 className='  mt-4'>Title</h5>
                            </div>
                            <div className='div3'>

                                <TextField className='mt-4' fullWidth id="outlined-basic" label="Title" variant="outlined" {...register('title', {
                                    required: "Title Requried", pattern: {
                                        value: /^[a-zA-Z " "]+$/g,
                                        message: "Only Characters"
                                    }
                                })} />

                            </div>
                        </div>
                        {errors.title && <p style={{ marginLeft: '50%', color: 'red' }}>{errors.title.message}</p>}
                        <div className='div4'>
                            <div className='div3'>
                                <h5 className='mt-4'>Subtitle</h5>
                            </div>
                            <div className='div3'>

                                <TextField className='mt-4' fullWidth id="outlined-basic" label="Subtitle" variant="outlined" {...register('subtitle', {
                                    required: "Sub Title Requried", pattern: {
                                        value: /^[a-zA-Z " "]+$/g,
                                        message: "Only Characters"
                                    }
                                })} />

                            </div>
                        </div>

                        {errors.subtitle && <p style={{ marginLeft: '50%', color: 'red' }}>{errors.subtitle.message}</p>}
                        <div className='div4 mt-3'>
                            <div className='div3'>
                                <h5 className='mt-4'>Title color</h5>
                            </div>
                            <div className='div3'>

                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={colors}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Color"
                                        {...register('titlecolor', { required: "Choose color" })}
                                    />}
                                />

                            </div>
                        </div>
                        <div className='div4 mt-3'>
                            <div className='div3'>
                                <h5 className='mt-4'>Subitle color</h5>
                            </div>
                            <div className='div3'>

                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={colors}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Color"
                                        {...register('subtitlecolor', { required: "Choose color" })} />}
                                />

                            </div>
                        </div>
                        <div className='div4 mt-5'  >
                            <div className='div3'>
                                <h5 className='mt-3' >Image</h5>

                            </div>
                            <div className='div3'>
                                <label htmlFor="upload-photo1">
                                    <input
                                        accept='.png,.jpg'
                                        style={{ display: 'none' }}
                                        id="upload-photo1"
                                        name="upload-photo1"
                                        type="file"

                                        onChange={(e) => {
                                            setImage1(e.target.files[0])
                                            const objectUrl1 = URL.createObjectURL(e.target.files[0])
                                            setImageFpreview(objectUrl1)
                                        }
                                        }
                                    />

                                    <Button style={{ marginLeft: '20%' }} color="secondary" variant="contained" component="span">
                                        Choose Image
                                    </Button>

                                </label>

                            </div>
                            <div className='div3'>
                                <label htmlFor="upload-photo2">
                                    <input
                                        accept='.png,.jpg'
                                        style={{ display: 'none' }}
                                        id="upload-photo2"
                                        name="upload-photo2"
                                        type="file"
                                        onChange={(e) => {
                                            setImage2(e.target.files[0])
                                            const objectUrl2 = URL.createObjectURL(e.target.files[0])
                                            setImageSpreview(objectUrl2)
                                        }
                                        }
                                    />

                                    <Button style={{ marginLeft: '20%' }} color="secondary" variant="contained" component="span">
                                        Choose Image
                                    </Button>

                                </label>

                            </div>
                            <div className='div3'>
                                <label htmlFor="upload-photo3">
                                    <input
                                        accept='.png,.jpg'
                                        style={{ display: 'none' }}
                                        id="upload-photo3"
                                        name="upload-photo3"
                                        type="file"
                                        onChange={(e) => {
                                            setImage3(e.target.files[0])
                                            const objectUrl3 = URL.createObjectURL(e.target.files[0])
                                            setImageTpreview(objectUrl3)
                                        }
                                        }
                                    />

                                    <Button style={{ marginLeft: '20%' }} color="secondary" variant="contained" component="span">
                                        Choose Image
                                    </Button>

                                </label>

                            </div>

                        </div>

                        <div className='error-msg'>
                            {errors.image1 && <p className='errmsg'>{errors.image1.message}</p>}
                            {errors.image2 && <p className='errmsg'>{errors.image2.message}</p>}
                            {errors.image3 && <p className='errmsg'>{errors.image3.message}</p>}
                        </div>
                        <div className='imagepreview'>
                            <div className='previewinner'>

                                {imageFpreview && <img src={imageFpreview} className='image-Cls'></img>}
                            </div>
                            <div className='previewinner'>
                                {imageSpreview && <img src={imageSpreview} className='image-Cls'></img>}
                            </div>
                            <div className='previewinner'>
                                {imageTpreview && <img src={imageTpreview} className='image-Cls'></img>}
                            </div>
                        </div>

                        {loading ? <div className='m-5'> <LinearProgress /></div> : <button type='submit' className='addbtn'>Add</button>}
                        {error && <Alert variant="outlined" severity="error"> {error}</Alert>}
                        {bannerSucess && <Alert variant="outlined" severity="success">Banner Updated </Alert>}
                    </form>
                </Col>
            </Row>


        </Container>
    )
}

export default AddBannerForm
