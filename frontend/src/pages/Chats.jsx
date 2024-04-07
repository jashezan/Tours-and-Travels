import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../utils/config'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { Box } from "@chakra-ui/layout"

import SideDrawer from '../components/miscellaneous/SideDrawer'
import MyChats from '../components/MyChats'
import ChatBox from '../components/ChatBox'

const Chats = () => {
    const [chats, setChats] = useState([])
    const { user } = useContext(AuthContext)

    const fetchChats = async () => {


        try {
            if (!user || user === undefined || user === null) {
                alert('Please sign in')
            }

        }
        catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        fetchChats()
    }, [])

    return (
      <div
        className="container mx-auto  d-flex"
        style={{ width: "100%" }}
      >
        <div className="w-30 h-70">{user && <SideDrawer />}</div>
        <Box
          d="flex"
          justifyContent="space-between"
          w="70%"
          h="91.5vh"
          p="10px"
        >
          {user && <MyChats />}
          {user && <ChatBox />}
        </Box>
      </div>
    );
}

export default Chats