import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import './SignupForm.css'
import { useForm } from "react-hook-form";
import axios from '../util/axios.js'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {USER_SIGNUP_HEADING} from '../constances/CommonConstants'



const SignupForm = () => {
  const navigate=useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signuperror,setsignuperror]=useState(false)
  const onSubmit = async(data)=>{
    const { name, username, email, phone, password,age,weight,height,healthcondition }=data

 
    try{
      let response = await axios.post('/user', { name, email, phone,username, password,age,weight,height,healthcondition })
       
       if(response.data)
        {
          
          navigate('/login')
        }
    } catch(err){
     
      setsignuperror(err.response.data.message)
    }
  }
  return (

    <Container>
      <Paper elevation={3} style={{marginTop:100,minHeight:650}}>
        <Typography variant='h4' component='h6' textAlign='center' >{USER_SIGNUP_HEADING}</Typography>
      <form onSubmit={handleSubmit(onSubmit)} >
    <Grid container spacing={6} margin='auto' >
    <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
      <TextField label='Enter the name' sx={{width:'90%'}} name='name' {...register("name",{required:'Name Required',pattern:{
        value:/^[a-zA-Z]+$/g,
        message:"Only Characters"}})} />
      {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      </Grid>
      <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
      <TextField label='Enter the username' sx={{width:'90%'}}  name='username' {...register('username',{required:"UserName Requried",pattern:{
        value:/^[a-zA-Z]+$/g,
        message:"Only Characters"}})} />
      {errors.username && <p className='text-danger'>{errors.username.message}</p>}
      </Grid>
      <Grid item xs={12} lg={6} xl={6} md={6} sm={6} >
        <TextField label='Enter the MobNo'  sx={{width:'90%'}} {...register('phone',{required:"Mobile number required",minLength:{
          value:10,
          message:"Enter 10 digit number"
        },
        maxLength:{
          value:10,
          message:"Enter 10 digit number"
        }})} />
 {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}      </Grid>
      <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
      <TextField label='Enter the Email' sx={{width:'90%'}} {...register('email',{required:"Email Required",patter:{
        value:/^\S+@\S+$/i,
        message:"Enter the Correct Email"
      }})}  />
       {errors.email && <p className='text-danger'>{errors.email.message}</p>}  
       {signuperror && <p className='text-danger'>{signuperror}</p>}      

      
      </Grid>
      <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
      <TextField label='Enter the Age' type={'number'} name='age'  sx={{width:'90%'}} {...register('age',{required:'Age is Required',patter:{
        value:/^(0|[1-9][0-9]*)$/,
        message:"Enter the Correct Email"
      },maxLength:{
        value:3,
        message:"Maximun Lengthn 3"
      }})} />
      {errors.age && <p className='text-danger'>{errors.age.message}</p>}     
      </Grid>
      <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
      <TextField label='Enter the Weight' name='weight' type={'number'} sx={{width:'90%'}} {...register('weight',{required:'weight is Required',patter:{
        value:/\b([0-9]|10)\b /,
        message:"Enter the Correct Email"
      },
        maxLength:{
          value:3,
          message:'Maximum 3 Digit '
        }
      })} />
        {errors.weight && <p className='text-danger'>{errors.weight.message}</p>}   
      </Grid>
      <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
      <TextField label='Enter the Height' name='height' type={'number'}  sx={{width:'90%'}} {...register('height',{required:'height is Required',patter:{
        value:/\b([0-9]|10)\b /,
        message:"Enter the Correct Email"
      },
        maxLength:{
          value:3,
          message:'Maximum 3 Digit '
        }
      })} />
        {errors.height && <p className='text-danger'>{errors.height.message}</p>}   
      </Grid>
      <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
      <TextField label='Enter the Password' name='password'  sx={{width:'90%'}} {...register('password',{required:'Password is Required',
        minLength:{
          value:8,
          message:'Minimun 8 Digit '
        }
      })} />
       {errors.password && <p className='text-danger'>{errors.password.message}</p>}   
      </Grid>
      <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
      <TextField label='Enter the Health Condition' type={'text'} name='password'  sx={{width:'90%'}} {...register('healthcondition'
      )} />
       {errors.password && <p className='text-danger'>{errors.password.message}</p>}   
      </Grid>
    
     
     
     

     
        <Button type='submit' variant='contained' size='large' sx={{margin:'auto',marginTop:5}} >Submit</Button>
    </Grid>
        </form>
 </Paper>
  </Container>  
    
  )
}

export default SignupForm


// import React, { useState } from 'react'
// import axios from '../util/axios.js'
// import {  useNavigate } from 'react-router-dom'
// import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'



// function SignupForm() {
//   const navigate = useNavigate()
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [mob, setMob] = useState("")
//   const [password, setPassword] = useState("")

//   const[age,setAge]=useState("")
//   const[weight,setWeight]=useState("")
//   const[height,setHeight]=useState("")
//   const[healthcondition,setHealtCondition]=useState("")
//   const [error, setError] = useState("")


//   const RegisterUser = async (e) => {
    
//     e.preventDefault()
//     let data = await axios.post('/signup', { name, email, mob, password,age,weight,height,healthcondition })
//    if(data.data)
// {
//   navigate('/')
// }
//   }
//   return (

//     <Grid   style={{marginTop:"6%"}}>
//       <Paper elevation={20} style={{ padding: "30px 20px", width: "300px", margin: "20px auto" }}>

//         <Grid align="center">
//           <Avatar>

//           </Avatar>
//           <h2 >Signup</h2>
//           <Typography variant='caption'> Please fill the form to create account    </Typography>
//         </Grid>
//         <form onSubmit={RegisterUser} >
//           <TextField onChange={(e) => {setName(e.target.value) }} fullWidth label="Name" placeholder='Enter your name' />
//           <TextField onChange={(e) => setEmail(e.target.value)} fullWidth label="Email" placeholder='Enter your email' />
//           <TextField onChange={(e) => setMob(e.target.value)} fullWidth label="Mob" placeholder='Enter your mob no' />
//           <TextField onChange={(e) => setPassword(e.target.value)} fullWidth label="Password" type={'password'} placeholder='Enter the password' />
//           <TextField onChange={(e) => setAge(e.target.value)} fullWidth label="Age" type={'text'} placeholder='Enter the password' />

//           <TextField onChange={(e) => setHeight(e.target.value)} fullWidth label="Height" type={'text'} placeholder='Enter the password' />


//           <TextField onChange={(e) => setWeight(e.target.value)} fullWidth label="Weight" type={'text'} placeholder='Enter the password' />
//           <TextField onChange={(e) => setHealtCondition(e.target.value)} fullWidth label="Healthcondition" type={'text'} placeholder='Enter the password' />


//           <div>
//             <div style={{ marginTop: "10px" }}>
//               {/* <Link  >login page</Link> */}

//             </div>
//             <Button style={{ marginLeft: "10rem", marginTop: "9px" }} type='submit' variant='contained' color='primary'>Sign Up</Button>
//           </div>


//         </form>

//       </Paper>
//     </Grid>
//   )
// }

// export default SignupForm