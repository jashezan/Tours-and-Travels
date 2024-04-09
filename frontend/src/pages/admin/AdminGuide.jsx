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

const AdminGuide = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/booking`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBookings(data?.data))
      .catch((err) => console.error(err));
  }, []);
  const toast = useToast();
  const toastIdRef = React.useRef();
  const deleteBooking = async (bookingId) => {
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
      const response = await fetch(`${BASE_URL}/booking/${bookingId}`, {
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
      <h1>Booking</h1>
      <TableContainer
        style={{
          margin: "20px auto",
        }}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Tour / Guide / Plane</Th>
              <Th>Name</Th>
              <Th>Booked At</Th>
              <Th>Payment Status</Th>
              <Th>Cancelled</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bookings?.length > 0 &&
              bookings?.map((booking) => (
                <Tr key={booking?._id}>
                  <Td>
                    {booking?.tourId !== null
                      ? "Tour"
                      : booking?.guideId !== null
                      ? "Guide"
                      : booking?.planeTicketId !== null
                      ? "Plane Ticket"
                      : "No Booking"}
                  </Td>
                  <Td>
                    {booking?.tourId !== null ? (
                      <Text>
                        <Tooltip label={`Guest Size: ${booking?.guestSize}`}>
                          {`${booking?.tourId.title} (${booking?.guestSize})`}
                        </Tooltip>
                      </Text>
                    ) : booking?.guideId !== null ? (
                      `${booking?.guideId.firstName} ${booking?.guideId.lastName}`
                    ) : booking?.planeTicketId !== null ? (
                      booking?.planeTicketId.airline
                    ) : (
                      "No Booking"
                    )}
                  </Td>
                  <Td>{new Date(booking?.createdAt).toLocaleDateString()}</Td>
                  <Td>
                    {booking?.paymentAmount !== null ? (
                      <span style={{ color: "green" }}>Paid</span>
                    ) : booking?.status === "CANCELLED" ? (
                      <span style={{ color: "red" }}>Cancelled</span>
                    ) : (
                      <span style={{ color: "red" }}>Unpaid</span>
                    )}
                  </Td>
                  <Td>
                    {booking?.status === "CANCELLED" ? (
                      <span style={{ color: "red" }}>Cancelled</span>
                    ) : (
                      <span>Active</span>
                    )}
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteBooking(booking?._id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default AdminGuide;
