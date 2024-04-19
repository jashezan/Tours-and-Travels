import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/config.js";
import { Container } from "reactstrap";
import {
  useToast,
  Button,
  Text,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const getTotalAmount = (data) => {
  let total = 0;
  if (data.tourId !== null) {
    total += (data?.tourId?.price * data?.guestSize) + 10;
  }
  if (data.guideId !== null) {
    total += data?.guideId?.pricePerHour;
  }
  if (data.planeTicketId !== null) {
    total += data?.planeTicketId?.price;
  }
  return total;
};

const Payment = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${BASE_URL}/booking/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);
  const toast = useToast();
  const toastIdRef = React.useRef();
  const makePayment = async (totalAmount) => {
    const addToast = (msg, state) => {
      toastIdRef.current = toast({
        description: msg,
        status: state || "info",
        duration: 9000,
        isClosable: true,
      });
    };
    const updateToast = (newMsg, state) => {
      if (toastIdRef.current) {
        toast.update(toastIdRef.current, {
          description: newMsg,
          status: state || "info",
        });
      }
    };

    try {
      addToast("Payment in progress...");
      const response = await fetch(`${BASE_URL}/booking/payment/${id}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentAmount: totalAmount,
        }),
      });
      const res = await response.json();
      updateToast(res.message, "success");
      navigate("/thank-you");
    } catch (error) {
      console.error(error);
      updateToast("Payment Failed", "error");
    }
  };
  if (data) {
    return (
      <Container>
        <h1 style={{ textAlign: "center" }}>Payment</h1>
        <Text fontSize="3xl">Hello, {data?.userId?.username}</Text>
        <Stack spacing="4">
          {data?.tourId !== null && (
            <Card>
              <CardBody>
                <Text>Booking For: {data?.tourId?.title}</Text>
                <Text>City: {data?.tourId?.city}</Text>
                <Text>Address: {data?.tourId?.address}</Text>
                <Text>Price: {data?.tourId?.price}</Text>
              </CardBody>
            </Card>
          )}
          {data?.guideId !== null && (
            <Card>
              <CardBody>
                <Text>Booking For Guide</Text>
                <Text>
                  Name: {data?.guideId?.firstName + data?.guideId?.lastName}
                </Text>
                <Text>Email: {data?.guideId?.email}</Text>
                <Text>Phone: {data?.guideId?.phone}</Text>
                <Text>Fee (Per Hour): {data?.guideId?.pricePerHour}</Text>
              </CardBody>
            </Card>
          )}
          {data?.planeTicketId !== null && (
            <Card>
              <CardBody>
                <Text>Booking For Plane</Text>
                <Text>From: {data?.planeTicketId?.departureAirport}</Text>
                <Text>To: {data?.planeTicketId?.arrivalAirport}</Text>
                <Text>At: {data?.planeTicketId?.departureDateTime}</Text>
                <Text>Amount: {data?.planeTicketId?.price}</Text>
              </CardBody>
            </Card>
          )}
          <Card align="center">
            <CardBody>
              {data.paymentAmount !== null ? (
                <h1 style={{ color: "green" }}>Payment Done For The Booking</h1>
              ) : (
                <>
                  <Text>Payable Amount: {getTotalAmount(data)}</Text>
                  <Button
                    colorScheme="green"
                    onClick={() => makePayment(getTotalAmount(data))}
                  >
                    Pay
                  </Button>
                </>
              )}
            </CardBody>
          </Card>
        </Stack>
      </Container>
    );
  } else {
    return (
      <Container style={{ textAlign: "center" }}>
        <h1 style={{ color: "red" }}>Not Available</h1>
      </Container>
    );
  }
};

export default Payment;
