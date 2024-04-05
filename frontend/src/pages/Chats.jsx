import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../utils/config'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const Chats = () => {
    const [chats, setChats] = useState([])
    const { user } = useContext(AuthContext)

    const fetchChats = async () => {


        try {
            if (!user || user === undefined || user === null) {
                alert('Please sign in')
            }

            const { data } = await axios.get('${BASE_URL}/chat')

            setChats(data)
        }
        catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        fetchChats()
    }, [])

    return (
        <div style={{ width: "100%" }}>
            {/* {user && <SideDrawer />} */}

        </div>
    )
}

export default Chats