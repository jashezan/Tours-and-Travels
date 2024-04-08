import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./../utils/config.js";
import { AuthContext } from "../context/AuthContext.jsx";
import { Image, Text } from "@chakra-ui/react";

import { Container, Row, Col, Form, ListGroup } from "reactstrap";

const GuideDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [guide, setGuide] = useState({});
  useEffect(() => {
    fetch(`${BASE_URL}/guides/${id}`)
      .then((res) => res.json())
      .then((data) => setGuide(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Row>
        <Text as={'h1'} className="">{`${guide.firstName} ${guide.lastName}`} ({guide.rating} Star)</Text>
        <Text as={'h4'} className="">{guide.phone}</Text>
        <Text as={'h4'} className="">{guide.email}</Text>
        <Text as={'h4'} className="">${guide.pricePerHour}</Text>
      </Row>
      <Row>
        <Image
          src={guide.image}
          alt={guide.firstName}
          className="img-fluid"
        />
      </Row>
    </Container>
  );
};

export default GuideDetails;
