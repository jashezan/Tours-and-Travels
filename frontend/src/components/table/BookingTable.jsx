import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import BookingTableRow from "./BookingTableRow";

const BookingTable = ({ bookings }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Tour / Guide / Plane</Th>
            <Th>Name</Th>
            <Th>Booked At</Th>
            <Th>Payment Status</Th>
            <Th>Cancel</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bookings.length > 0 &&
            bookings.map((booking) => (
              <BookingTableRow key={booking._id} booking={booking} />
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BookingTable;
