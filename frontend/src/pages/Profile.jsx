import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import useFetch from './../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { Container, Col, Row } from 'reactstrap'
import { AuthContext } from '../context/AuthContext'

const userID = '65e1c9bc9baf00b6b2c5478c'

const Profile = () => {

    // const {
    //     data: user,
    //     loading,
    //     error
    // } = useFetch(`${BASE_URL}/users/${userID}`, {
    //     credentials: 'include'
    // })

    // useEffect(() => { }
    //     , [user])

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <h1>User Profile</h1>
            <h4>Username: {user.username}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Role: {user.role}</h4>
            <h4>Created At: {user.createdAt}</h4>
            <h4>Updated username at: {user.updatedAt}</h4>
            <h4>User ID: {user._id}</h4>
        </Container>
    )
}

export default Profile