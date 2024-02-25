import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>
                    “As a travel enthusiast and business owner, I can’t praise the Travel and Tourism Management System enough. This web-based application has streamlined our operations, making it a breeze for clients to book hotels for their tours. The system’s specificity in handling bookings and automating travel firm processes has significantly improved our efficiency. It’s like having a reliable travel companion that ensures smooth journeys for both tourists and locals. Kudos to the team behind this remarkable system!” 🌟
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                    “As a travel enthusiast and business owner, I can’t praise the Travel and Tourism Management System enough. This web-based application has streamlined our operations, making it a breeze for clients to book hotels for their tours. The system’s specificity in handling bookings and automating travel firm processes has significantly improved our efficiency. It’s like having a reliable travel companion that ensures smooth journeys for both tourists and locals. Kudos to the team behind this remarkable system!” 🌟
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Christina</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                    “As a travel enthusiast and business owner, I can’t praise the Travel and Tourism Management System enough. This web-based application has streamlined our operations, making it a breeze for clients to book hotels for their tours. The system’s specificity in handling bookings and automating travel firm processes has significantly improved our efficiency. It’s like having a reliable travel companion that ensures smooth journeys for both tourists and locals. Kudos to the team behind this remarkable system!” 🌟
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Karim</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                    “As a travel enthusiast and business owner, I can’t praise the Travel and Tourism Management System enough. This web-based application has streamlined our operations, making it a breeze for clients to book hotels for their tours. The system’s specificity in handling bookings and automating travel firm processes has significantly improved our efficiency. It’s like having a reliable travel companion that ensures smooth journeys for both tourists and locals. Kudos to the team behind this remarkable system!” 🌟
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Karim</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                    “As a travel enthusiast and business owner, I can’t praise the Travel and Tourism Management System enough. This web-based application has streamlined our operations, making it a breeze for clients to book hotels for their tours. The system’s specificity in handling bookings and automating travel firm processes has significantly improved our efficiency. It’s like having a reliable travel companion that ensures smooth journeys for both tourists and locals. Kudos to the team behind this remarkable system!” 🌟
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Karim</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials