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

const AdminTour = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/tours`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setTours(data.data))
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
  const deleteTour = async (tourId) => {
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
      const response = await fetch(`${BASE_URL}/tours/${tourId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      updateToast(res?.message, "success");
    } catch (error) {
      console.error(error);
      updateToast("Deletetion Failed", "error");
    }
  };

const featureTour = async (tourId) => {
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
    addToast("Updating...");
    const response = await fetch(`${BASE_URL}/tours/${tourId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ featured: true }),
    });
    const res = await response.json();
    updateToast(res?.message, "success");
  } catch (error) {
    console.error(error);
    updateToast("Updation Failed", "error");
  }
};

  return (
    <AdminLayout>
      <h1>Tours</h1>
      <TableContainer
        style={{
          margin: "20px auto",
        }}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>City</Th>
              <Th>Distance</Th>
              <Th>Price</Th>
              <Th>Capacity</Th>
              <Th>Featured</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tours?.length > 0 &&
              tours?.map((tour) => (
                <Tr key={tour?._id}>
                  <Td>{tour?.title}</Td>
                  <Td>{tour?.city}</Td>
                  <Td>{tour?.distance}</Td>
                  <Td>{tour?.price}</Td>
                  <Td>{tour?.maxGroupSize}</Td>
                  <Td>
                    {tour?.featured ? (
                      <span>Featured</span>
                    ) : (
                      <Button
                        colorScheme="red"
                        onClick={() => featureTour(tour?._id)}
                      >
                        Delete
                      </Button>
                    )}
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteTour(tour?._id)}
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

export default AdminTour;
