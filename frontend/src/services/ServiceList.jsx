import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Provide you with weather forecast.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Handpicked tour guide who is very friendly and knowledgeable.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "You can customize your preference here.",
    },
]

const ServiceList = () => {
    return (
        <>
            {serviceData.map((item,index)=> (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    )
}

export default ServiceList