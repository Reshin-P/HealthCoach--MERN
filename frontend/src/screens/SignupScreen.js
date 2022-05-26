import React from 'react'
import Header from '../components/Header'
import SignupForm from '../components/SignupForm'
import Footer from "../components/Footer";
import {  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const SignupScreen = () => {
  const navigate=useNavigate()
  useEffect(() => {
    

    const user=localStorage.getItem('userInfo')
    if(user){
      navigate('/')
    }
    
 
   }, [])
  return (
    <div>
      <Header />
      <SignupForm />
      <Footer />
    </div>
  )
}

export default SignupScreen
