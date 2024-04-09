import React, { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../utils/config";
import { Container } from "reactstrap";
import { AuthContext } from "../context/AuthContext";
import BookingTable from "../components/table/BookingTable";
import { useToast } from "@chakra-ui/react";
import { Row, Col } from "reactstrap";
import { Flex, Spacer, Box, Image } from "@chakra-ui/react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const toast = useToast();
  useEffect(() => {
    fetch(`${BASE_URL}/booking/mybooking`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setTableData(data.data))
      .catch((err) => {
        console.log(err);
        return toast({
          title: "Can't Fetch Data",
          description: err.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      });
  }, []);
  return (
    <Container>
      <Container>
        <Flex>
          {tableData[0]?.userId?.username && (
            <Box>
              <h1>User Profile</h1>
              <h4>Username: {tableData[0]?.userId?.username}</h4>
              <h4>Email: {tableData[0]?.userId?.email}</h4>
              <h4>Role: {tableData[0]?.userId?.role}</h4>
            </Box>
          )}
          <Spacer />
          {tableData[0]?.userId?.image && (
            <Box>
              <Image src={tableData[0]?.userId?.image} />
            </Box>
          )}
        </Flex>
      </Container>
      <Container
        style={{
          margin: "2rem auto",
        }}
      >
        <BookingTable bookings={tableData} />
      </Container>
    </Container>
  );
};

export default Profile;
