import { textAlign } from '@mui/system'
import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Trainers = ({ trainers }) => {

    return (
        <div key={trainers._id} className='mt-5 align-items-center mx-auto  trainer-card' >

            <img className='trainer-img' src={trainers.profilephoto}></img>
            <div className='trainer  border shadow'   >

                <LinkContainer style={{ marginTop: "100px", marginLeft: "90px" }} to={`/trainers/${trainers._id}`}><h3 className="ml-5 text-danger" >{trainers.name}</h3></LinkContainer>
                <div style={{ display: 'flex', color: "#d22", justifyContent: 'center' }}>
                    {trainers.streams.map((str) => (
                        <p className='stream-name'>{str.name} </p>

                    ))}
                </div>
                <div className='m-3' >
                    <p className='h5`'>{trainers.about}</p>
                </div>



            </div>



        </div>
    )
}

export default Trainers
