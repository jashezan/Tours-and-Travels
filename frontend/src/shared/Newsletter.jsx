import React from 'react'
import '.newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get useful traveling information.</h2>

                            <div className="newsletter__input">
                                <input type="email" placeholder='Enter your email' />
                                <button className='btn newsletter__btn'>Subscribe</button>
                            </div>

                            <p>Dear Travel Enthusiasts, Welcome to our monthly newsletter! As your trusted travel partner, we’re excited to share the latest happenings, insider tips, and exciting offers. Let’s dive in</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter