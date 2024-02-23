import React from 'react'
import '../styles/home.css'

import { Container, Row,Col } from 'reactstrap'

import db from '../assets/images/db.jpg'
import fm from '../assets/images/fm.jpg'
import bd from '../assets/images/bd.jpg'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'

import SearchBar from './../shared/SearchBar'
import ServiceList from '../services/ServiceList'


const Home = () => {
  return (
    <>
    
      {/*============== hero section start =============== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={'Unlock Your Adventure'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Exploring creates lasting <span className="highlight">memories</span></h1>
                <p>"Embrace the journey, it shapes you. Every step, every challenge, every setback, contributes to your growth. You're stronger than you know, with limitless potential. Keep moving forward, even when it's tough. The view from the top will be worth it all."</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                {/* <img src={heroImg} alt="" /> */}
                <img src={db} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <img src={fm} alt="" />
                {/* <video src={heroVideo} alt="" controls /> */}
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                {/* <img src={heroImg02} alt="" /> */}
                <img src={bd} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*============== hero section end =============== */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ================= featured tour section start ==================== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================= featured tour section end ==================== */}

    </>
  )
}

export default Home