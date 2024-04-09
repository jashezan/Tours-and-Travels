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
import "./admin.styles.css";

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

const AdminSidebarItem = ({ path, display, isOpen, toggleIsOpen }) => {
  const location = useLocation();
  const bgColor = location.pathname === path ? "limegreen" : "transparent";

  return (
    <Link
      to={path}
      className="sidebar__link"
      style={{
        backgroundColor: bgColor,
      }}
      onClick={toggleIsOpen}
    >
      <Text ml={3}>{display}</Text>
    </Link>
  );
};

const AdminSidebar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();

  return (
    <Box minH={"100vh"} transitionProperty="background-color">
      <Flex direction="column" h="100%">
        <Link to="/admin/booking" display="flex">
          <Text fontSize="lg" fontWeight="bold" textAlign={"center"}>
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
