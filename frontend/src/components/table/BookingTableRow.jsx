import { Tr, Td } from "@chakra-ui/react";
import React from "react";
import { BASE_URL } from "../../utils/config.js";
import { Button, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BookingTableRow = ({ booking }) => {
  const toast = useToast();
  const cancelBooking = async () => {
    const cancelResp = await fetch(
      `${BASE_URL}/booking/cancel/${booking._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        credentials: "include",
      }
    );
    const cancelData = await cancelResp.json();
    toast({
      title: "Booking Cancelled",
      description: cancelData?.message,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Tr>
      <Td>{booking.userId.username}</Td>
      <Td>{booking.tourId?.title}</Td>
      <Td>{booking.guestSize}</Td>
      <Td>{new Date(booking.createdAt).toLocaleDateString()}</Td>
      <Td>
        {booking.paymentAmount !== null ? (
          <span style={{ color: "green" }}>Paid</span>
        ) : booking.status === "CANCELLED" ? (
          <span style={{ color: "red" }}>Cancelled</span>
        ) : (
          <Link to={`/payment/${booking?._id}`}>
            <Button colorScheme="green">Pay</Button>
          </Link>
        )}
      </Td>
      <Td>
        {booking.status === "CANCELLED" ? (
          <span style={{ color: "red" }}>Cancelled</span>
        ) : (
          <Button colorScheme="red" onClick={cancelBooking}>
            Cancel
          </Button>
        )}
      </Td>
    </Tr>
  );
};

export default BookingTableRow;
