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

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/users`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUsers(data.data))
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
  const deleteUser = async (userId) => {
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
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
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
      <h1>Users</h1>
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
              <Th>Role</Th>
              <Th>Created At</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.length > 0 &&
              users?.map((user) => (
                <Tr key={user?._id}>
                  <Td>{user?.username}</Td>
                  <Td>{user?.email}</Td>
                  <Td>{user?.role}</Td>
                  <Td>
                    {new Date(user?.createdAt).toLocaleString("en-US", {
                      timeZoneName: "short",
                    })}
                  </Td>

                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteUser(user?._id)}
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

export default AdminUsers;
