import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./../utils/config.js";
import { AuthContext } from "../context/AuthContext.jsx";
import { Image, Text, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";

const GuideDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [guide, setGuide] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${BASE_URL}/guides/${id}`)
      .then((res) => res.json())
      .then((data) => setGuide(data))
      .catch((err) => console.log(err));
  }, []);
  const bookGuide = async () => {
    try {
      fetch(`${BASE_URL}/booking`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          guideId: guide?._id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(`/payment/${data.data._id}`);
        });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container>
      <Stack flexDirection={"row"}>
        <Row>
          <Text as={"h1"} className="">
            {`${guide.firstName} ${guide.lastName}`} ({guide.rating} Star)
          </Text>
          <Text as={"h4"} className="">
            {guide.phone}
          </Text>
          <Text as={"h4"} className="">
            {guide.email}
          </Text>
          <Text as={"h4"} className="">
            ${guide.pricePerHour}
          </Text>
          <Button
            colorScheme="green"
            maxWidth={"fit-content"}
            onClick={bookGuide}
          >
            Hire Me
          </Button>
        </Row>
        <Row>
          <Image
            src={guide.image}
            alt={guide.firstName}
            className="img-fluid"
          />
        </Row>
      </Stack>
    </Container>
  );
};

export default GuideDetails;
