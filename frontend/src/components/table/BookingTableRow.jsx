import { Tr, Td } from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";

const BookingTableRow = ({ booking }) => {
  return (
    <Tr>
      <Td>{booking.userId.username}</Td>
      <Td>{booking.tourId?.title}</Td>
      <Td>{booking.guestSize}</Td>
      <Td>{booking.phone}</Td>
      <Td>{new Date(booking.createdAt).toLocaleDateString()}</Td>
      <Td>
        <Button colorScheme="red">
          Cancel
        </Button>
      </Td>
    </Tr>
  );
};

export default BookingTableRow;
