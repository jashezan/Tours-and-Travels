import React, { useEffect, useState } from "react";
import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config.js";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tooltip,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Plane = () => {
  const [planeTickets, setPlaneTickets] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    fetch(`${BASE_URL}/booking/plane-ticket`)
      .then((res) => res.json())
      .then((data) => setPlaneTickets(data.data))
      .catch((err) => console.log(err));
  }, []);
  const bookGuide = async (planeTicketId) => {
    toast({
      title: "We Recieved Your Request!",
      description: "Please wait for the confirmation.",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
    try {
      fetch(`${BASE_URL}/booking`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          planeTicketId,
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
    <>
      <CommonSection title={"Plane Tickets"} />
      <section>
        {planeTickets.length > 0 ? (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Airline</Th>
                  <Th>Flight Number</Th>
                  <Th>From</Th>
                  <Th>To</Th>
                  <Th>Price</Th>
                  <Th>Book</Th>
                </Tr>
              </Thead>
              <Tbody>
                {planeTickets.map((planeTicket) => (
                  <Tr key={planeTicket._id}>
                    <Td>{planeTicket.airline}</Td>
                    <Td>{planeTicket.flightNumber}</Td>
                    <Td>
                      <Tooltip
                        label={`Departure Time: ${new Date(
                          planeTicket.departureDateTime
                        ).toLocaleString("en-US", { timeZoneName: "short" })}`}
                        aria-label="A tooltip"
                      >
                        {planeTicket.departureAirport}
                      </Tooltip>
                    </Td>
                    <Td>
                      <Tooltip
                        label={`Arrival Time: ${new Date(
                          planeTicket.arrivalDateTime
                        ).toLocaleString("en-US", { timeZoneName: "short" })}`}
                        aria-label="A tooltip"
                      >
                        {planeTicket.arrivalAirport}
                      </Tooltip>
                    </Td>
                    <Td>{planeTicket.price}</Td>
                    <Td>
                      <Button
                        colorScheme="green"
                        onClick={() => bookGuide(planeTicket._id)}
                      >
                        Book
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <p>No Plane Tickets</p>
        )}
      </section>
    </>
  );
};

export default Plane;
