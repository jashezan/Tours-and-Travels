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
        <TableCaption>My Booking Table</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Tour</Th>
            <Th>Guest Size</Th>
            <Th>Phone</Th>
            <Th>Created At</Th>
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
