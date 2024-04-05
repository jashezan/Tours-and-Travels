import React, { useState, useEffect } from 'react'
import axios from 'axios'

import useFetch from './../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { Container, Col, Row } from 'reactstrap'

const userID = '65e1c9bc9baf00b6b2c5478c'

const Profile = () => {

    const {
        data: user,
        loading,
        error
    } = useFetch(`${BASE_URL}/users/${userID}`, {
        credentials: 'include'
    })

    useEffect(() => { }
        , [user])

    // console.log([user.username, user.email, user.role])
    console.log(user)

    return (
        <Container>
            <Row>
                {/* <Col key={user.username}>
                </Col>
                <Col key={user.email}>
                </Col>
                <Col key={user.role}>
                </Col> */}

            </Row>
        </Container>
    )
}

export default Profile