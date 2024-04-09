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
  const [guides, setGuides] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/guides`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setGuides(data))
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
      <h1>Guides</h1>
      <TableContainer
        style={{
          margin: "20px auto",
        }}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Fee(Per Hour)</Th>
              <Th>Rating</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {guides?.length > 0 &&
              guides?.map((guide) => (
                <Tr key={guide?._id}>
                  <Td>{`${guide?.firstName} ${guide?.lastName}`}</Td>
                  <Td>{guide?.email}</Td>
                  <Td>{guide?.phone}</Td>
                  <Td>{guide?.pricePerHour}</Td>
                  <Td>{guide?.rating}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteGuide(guide?._id)}
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
