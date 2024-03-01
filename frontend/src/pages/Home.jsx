import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'

import db from '../assets/images/db.jpg'
import fm from '../assets/images/fm.jpg'
import bd from '../assets/images/bd.jpg'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle'

import SearchBar from './../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

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
                  <Subtitle subtitle={'Unlock Your Adventure'} />
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
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ================= featured tour section end ==================== */}

      {/* ================= experience section start ==================== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />

                <h2>With our all experience <br /> we will serve you</h2>
                <p>“It’s through vulnerability that human beings create connections. The more vulnerable we can be with one another, the more that we’ll trust one another and the more we’ll be able to collaborate effectively.” — Neil Blumenthal </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================= experience section end ==================== */}

      {/* ================= gallery section start ==================== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2>Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================= gallery section end ==================== */}

      {/* ================= testimonial section start ==================== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans love'} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================= testimonial section end ==================== */}
      <Newsletter />
    </>
  )
}

export default Home