import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { io } from "socket.io-client"
import Message from '../components/Chat/Message/Message'
import axios from '../util/axios'
import './ChatScreen.css'

const ChatScreen = () => {

    const params = useParams()
    const [inpuText, setInputText] = useState("")
    const [conversation, setConversation] = useState(null)
    const [message, setMessage] = useState([])
    const [arrivalMessage, setArrivalMessage] = useState({})
    const [reciverInfo, setReciverInfo] = useState(null)
    const [reciverPhoto, setReciverPhoto] = useState('/images/profile/profile.jpg')
    const scrollRef = useRef();
    const Socket = useRef();
    const { user: { userInfo } } = useSelector((state) => {
        return state
    })

    const getReciver = async () => {
        const { data } = await axios.get(`/message/receiver/${params.receiver}`)
        setReciverInfo(data)
    }
    useEffect(() => {
        if (reciverInfo) {
            setReciverPhoto(reciverInfo.profilephoto)
        }
    }, [reciverInfo])


    useEffect(() => {
        getReciver()
    }, [reciverPhoto])
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    useEffect(() => {
        // Socket.current = io("https://eshopee.online")
        Socket.current = io("http://localhost:5000")
        Socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    })

    useEffect(() => {

        arrivalMessage && setMessage((prev) => [...prev, arrivalMessage])

    }, [arrivalMessage, conversation])


    useEffect(() => {

        Socket.current.emit("addUser", params.sender)
        Socket.current.on("getUsers", user => {
        })

    }, [userInfo])



    const createconversation = async () => {

        const chat = {
            sender: params.sender,
            receiver: params.receiver
        }
        try {
            const { data } = await axios.post('/conversation', chat)
            setConversation(data)

        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = () => {
        Socket.current.emit("sendMessage", {
            senderId: params.sender,
            reciverId: params.receiver,
            text: inpuText
        })


        let details = {
            text: inpuText,
            sender: params.sender,
            conversationId: conversation._id,
            createdAt: new Date()
        }
        setMessage([...message, details])
        axios.post('/message', details)
            .then(data => {

            })
            .catch((err) => console.log(err))
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
        <Container>

            <Container className='msg-main-container'>
                <Row className='online'>
                    <Col className='online-col mt-3' xs={2} sm={2} lg={1} xl={1} >


                        <img className='profilephoto' src={reciverPhoto}></img>

                    </Col>
                    <Col className='mt-3 ' xs={2} sm={2} lg={2} xl={2}>
                        <h3 >{reciverInfo ? reciverInfo.name : "reciver"}</h3>
                        <p>Online</p>
                    </Col>
                </Row>
                <Row className='mainrow'>
                    <Col className='inner' xs={12}>
                        {message.map((msg) => (
                            <div key={msg._id} ref={scrollRef}>
                                <Message message={msg} own={msg.sender === params.sender} />
                            </div>
                        ))
                        }

                    </Col>
                    <Col >
                        <div className='chatboxBottom'>
                            <textarea className='chatmessageinput' onChange={(e) => setInputText(e.target.value)} placeholder='write something'></textarea>
                            <button onClick={sendMessage} className='send-btn'>Send</button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </Container>
    )
}

export default ChatScreen 
