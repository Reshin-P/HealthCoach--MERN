import { Button, Grid, Paper, TextField } from "@mui/material";
import Alert from '@mui/material/Alert';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginForm } from '../actions/userActions';
import './LoginForm.css';

 

function Login() {
    const {loading,error,sucess,userInfo}=useSelector((state)=> state.loginUser)
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const [mailError, setMailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginerror, setLoginerror] = useState()
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const { username, password } = login
    const { register, handleSubmit, formState: { errors } } = useForm();


    useEffect(()=>{
        if(sucess){
  
            navigate('/')
        }
    },[sucess])
    const FormSubmit = async (input) => {
        dispatch(loginForm(login))
    
   
    }
    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '25px 0' }
    const paperStyle = { padding: 20, height: 'auto', width: 380, margin: '20px auto' }

    return (
        <div style={{ marginTop: '200px' }} >
            <Grid >

                <Paper elevation={10} style={paperStyle}>
                    <Grid><center>

                        <h2> Sign In</h2>
                        <p>{mailError}</p>
                        <p>{passwordError}</p>
                    </center>
                    </Grid>
                    {error && <Alert severity="error">{error}</Alert>}
                    <form onSubmit={handleSubmit(FormSubmit)}>
                        <TextField id="standard-basic" label="username" variant="standard" value={login.username} name="username" {...register('username', { required: "username is required" })} onChange={(event) => setLogin({ ...login, username: event.target.value })} fullWidth />
                        {errors?.username && <p className="text-danger">{errors.username.message}</p>}
                        <TextField id="standard-basic" label="Password" type='password' name='password' {...register('password', { required: "password is required" })} variant="standard" value={login.password} onChange={(event) => setLogin({ ...login, password: event.target.value })} fullWidth />
                        {errors?.password && <p className="text-danger">{errors.password.message}</p>}
                        <Button type="submit" variant="contained" style={btnStyle} color="primary" fullWidth>Submit</Button>
                    </form>
                    Need a Registration? <Link to={'/signup'}>Click Here</Link>
                    <Button type="submit" variant="outlined" className="mt-5" style={btnStyle} color="primary" fullWidth>  <img className="googleIcon" alt="" src="/images/google.png "></img> Login With Google</Button>
                </Paper>
            </Grid>
        </div>
    )
}
export default Login







// import React from 'react'
// import { Row, Container, Col, Alert, Form, Button } from "react-bootstrap"
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from '../util/axios.js'



// const LoginForm = () => {
//   const navigate = useNavigate()

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [message, setMessage] = useState("")
//   const LoginCheck = async (e) => {
//     e.preventDefault()


//     const data = await axios.post('/login', { email, password })
//     
//     if (data.data) {

//       localStorage.setItem('userInfo', JSON.stringify(data))
//       navigate('/')
    
//     }

//   }
//   return (
//     <Container className='LoginPage'>

//       <div className='form'>
//         {message && <Alert variant="danger" style={{ width: "19rem" }}>
//           <Alert.Heading>
//             {message}
//           </Alert.Heading>
//         </Alert>}
//         <h1 style={{ color: "green" }} className="text-sucess " >User Login</h1>
//         <Row>
//           <Col lg={5} md={6} sm={12} className="text-danger" >
//             <Form onSubmit={LoginCheck}>
//               <Form.Group className="mb-3 inputs" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
//                 <Form.Text className="text-muted">
//                   We'll never share your email with anyone else.
//                 </Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3 inputs" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
//               </Form.Group>
//               <div className='bars'>
//                 <Link to={'/signup'}>signup</Link>
//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>

//               </div>
//             </Form>

//           </Col>
//         </Row>
//       </div>
//     </Container>
//   )
// }

// export default LoginForm
