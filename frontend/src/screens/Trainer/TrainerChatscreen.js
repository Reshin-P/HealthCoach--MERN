import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Message from '../../components/Chat/Message/Message'
import axios from '../../util/axios'
import './TrainerChatscreen.css'





const TrainerChatscreen = () => {
    const params = useParams()
    const [inpuText, setInputText] = useState("")
    const [conversation, setConversation] = useState(null)
    const [message, setMessage] = useState([])
    const { trainerInfo: { trainerInfo } } = useSelector((state) => {
        return state
    })

    const createconversation = async () => {


        const chat = {
            user: params.user,
            trainer: params.trainer
        }
        try {
            const { data } = await axios.post('/conversation', chat)
            setConversation(data)
        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = async () => {
        let details = {
            text: inpuText,
            sender: trainerInfo._id,
            conversationId: conversation._id
        }
        try {
            const { data } = await axios.post('/message', details)
            setMessage([...message, data])
        } catch (error) {
        }
    }

    const getMessages = async () => {
        const { data } = await axios.get(`/message/${conversation._id}`)
        setMessage(data)
    }



    useEffect(() => {
        if (conversation) {
            getMessages()
        }
        else {
            createconversation()
        }
    }, [conversation])

    return (
        <Container className='msg-main-container'>
            <Row className='mainrow'>
                <Col xs={12}>
                    {message.map((msg) => (

                        <Message message={msg} own={msg.sender === trainerInfo._id} />

                    ))
                    }
                    <div className='chatboxBottom'>
                        <textarea className='chatmessageinput' onChange={(e) => setInputText(e.target.value)} placeholder='write something'></textarea>
                        <button onClick={sendMessage} className='send-btn'>Send</button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default TrainerChatscreen 
