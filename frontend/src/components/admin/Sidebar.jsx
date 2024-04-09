import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const adminList = [
  {
    path: "/admin/booking",
    display: "Bookings",
  },
  {
    path: "/admin/user",
    display: "Users",
  },
  {
    path: "/admin/tour",
    display: "Tours",
  },
  {
    path: "/admin/plane",
    display: "Planes",
  },
  {
    path: "/admin/reviews",
    display: "Reviews",
  },
  {
    path: "/admin/guide",
    display: "Guides",
  },
];

const AdminSidebarItem = ({ path, display, icon, isOpen, toggleIsOpen }) => {
  const location = useLocation();
  const bgColor = location.pathname === path ? "green.100" : "transparent";
  const color = isOpen ? "teal.500" : "gray.700";
  return (
    <Box
      as="button"
      onClick={toggleIsOpen}
      transitionProperty="background-color, color"
      _hover={{ bgColor: "green.200" }}
      bgColor={bgColor}
      color={color}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      fontWeight="semibold"
      borderRadius="md"
    >
      <Link to={path}>
        <Flex
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "semibold",
            padding: "0.75rem",
            borderRadius: "0.375rem",
          }}
        >
          <Text ml={3}>{display}</Text>
        </Flex>
      </Link>
    </Box>
  );
};

const AdminSidebar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();

  return (
    <Box
      top={0}
      left={0}
      minH={"100vh"}
      bg={useColorModeValue("gray.50", "teal.500")}
      transitionProperty="background-color"
    >
      <Flex direction="column" p={3} h="100%">
        <Link to="/admin" display="flex">
          <Text fontSize="lg" fontWeight="bold">
            Admin Panel
          </Text>
        </Link>
        {adminList.map((item, index) => (
          <AdminSidebarItem
            key={index}
            path={item.path}
            display={item.display}
            isOpen={isOpen && location.pathname.startsWith(item.path)}
            toggleIsOpen={onToggle}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default AdminSidebar;
