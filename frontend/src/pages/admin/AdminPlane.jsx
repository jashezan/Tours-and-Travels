import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/Layout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Tooltip,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BASE_URL } from "../../utils/config";

const AdminPlane = () => {
  const [planeTickets, setPlaneTickets] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/booking/plane-ticket`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setPlaneTickets(data?.data))
      .catch((err) => {
        toast({
          title: "An error occurred.",
          description: err.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        console.error(err);
      });
  }, []);
  const toast = useToast();
  const toastIdRef = React.useRef();
  const deleteGuide = async (guideId) => {
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
          description: newMsg || "successful",
          status: state || "info",
        });
      }
    };

    try {
      addToast("Deleting...");
      const response = await fetch(`${BASE_URL}/guides/${guideId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      console.log(res);
      updateToast(res?.message, "success");
    } catch (error) {
      console.error(error);
      updateToast("Deletetion Failed", "error");
    }
  };
  return (
    <AdminLayout>
      <h1>Flights</h1>
      <TableContainer
        style={{
          margin: "20px auto",
        }}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Airline</Th>
              <Th>Flight Number</Th>
              <Th>From</Th>
              <Th>To</Th>
              <Th>Price</Th>
              {/* <Th>Delete</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {planeTickets?.length > 0 &&
              planeTickets?.map((planeTicket) => (
                <Tr key={planeTicket?._id}>
                  <Td>{planeTicket?.airline}</Td>
                  <Td>{planeTicket?.flightNumber}</Td>
                  <Td>
                    <Tooltip
                      label={`Departure Time: ${new Date(
                        planeTicket?.departureDateTime
                      ).toLocaleString("en-US", { timeZoneName: "short" })}`}
                      aria-label="A tooltip"
                    >
                      {planeTicket?.departureAirport}
                    </Tooltip>
                  </Td>
                  <Td>
                    <Tooltip
                      label={`Arrival Time: ${new Date(
                        planeTicket?.arrivalDateTime
                      ).toLocaleString("en-US", { timeZoneName: "short" })}`}
                      aria-label="A tooltip"
                    >
                      {planeTicket?.arrivalAirport}
                    </Tooltip>
                  </Td>
                  <Td>{planeTicket?.price}</Td>
                  {/* <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteGuide(planeTicket?._id)}
                    >
                      Delete
                    </Button>
                  </Td> */}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default AdminPlane;
