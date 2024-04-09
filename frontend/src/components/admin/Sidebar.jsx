import React from "react";
import { Stack, Text, CardBody } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const adminList = [
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
    path: "/admin/booking",
    display: "Bookings",
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

// <Route path="/admin/reviews" element={<AdminReview />} />
// <Route path="/admin/guide" element={<AdminGuide />} />

const AdminList = () => {
  const location = useLocation();
  return (
    <>
      {adminList.map((item, index) => (
        <Link to={item.path} key={index}>
          <Text bgColor={location.pathname === item.path ? "green" : ""}>
            {item.display}
          </Text>
        </Link>
      ))}
    </>
  );
};

export default AdminList;
