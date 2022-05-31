import { Container } from 'react-bootstrap'
import React from 'react'
import './AdminHomepageScreen.css'
import HeaderAdmin from '../../components/Admin/HeaderAdmin'
import Dashboard from '../../components/Admin/Dashboard'

const AdminHomepageScreen = () => {
    return (
        <>
            <HeaderAdmin />
            <Dashboard />

        </>
    )
}

export default AdminHomepageScreen
