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

const AdminReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/review`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setReviews(data?.data))
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
  const deleteReview = async (reviewId) => {
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
      const response = await fetch(`${BASE_URL}/review/${reviewId}`, {
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
      <h1>Reviews</h1>
      <TableContainer
        style={{
          margin: "20px auto",
        }}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Reviewer</Th>
              <Th>Rating</Th>
              <Th>Review Text</Th>
              <Th>Created At</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reviews?.length > 0 &&
              reviews?.map((review) => (
                <Tr key={review?._id}>
                  <Td>{`${review?.username}`}</Td>
                  <Td>{review?.rating}</Td>
                  <Td>{review?.reviewText}</Td>
                  <Td>
                    {new Date(review?.createdAt).toLocaleString("en-US", {
                      timeZoneName: "short",
                    })}
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteReview(review?._id)}
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

export default AdminReview;
