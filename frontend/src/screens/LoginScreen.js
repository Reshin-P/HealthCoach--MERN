import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Footer from "../components/Footer";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginScreen = () => {
  const navigate = useNavigate()
  useEffect(() => {


    const user = localStorage.getItem('userInfo')
    if (user) {
      navigate('/')
    }


  }, [])
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />

    </div>
  )
}

export default LoginScreen
