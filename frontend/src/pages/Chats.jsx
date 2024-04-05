import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/config'
import axios from 'axios'

const Chats = () => {
    const [chats, setChats] = useState([])

    const fetchChats = async () => {
        const { data } = await axios.get('${BASE_URL}/chat')

        setChats(data)
    }

    useEffect(() => {
        fetchChats()
    }, [])

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}>{chat.chatName}</div>
            ))}
        </div>
    )
}

export default Chats