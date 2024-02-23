import React from 'react'
import '../styles/home.css'

import { Container, Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'

import SearchBar from './../shared/SearchBar'

const Home = () => {
  return <>
  
  {/*============== hero section start =============== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center ">
              <Subtitle subtitle={'Learn Before You Leap'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
            <p>“Embrace the journey, for it is the path that shapes you. Every step, every challenge, every setback—it all contributes to your growth. You are stronger than you realize, and your potential knows no bounds. Keep moving forward, even when the road seems steep. The view from the top will be worth every effort.”</p>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>

        <SearchBar />
      </Row>
    </Container>
  </section>
  {/*============== hero section end =============== */}

  </>
}

export default Home