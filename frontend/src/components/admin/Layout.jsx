import React, { useEffect } from "react";
import { Stack, Box, Card } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  useEffect(() => {
    document.title = "Admin Panel - MERN Tour Application";
    document.getElementById("navId").classList.add("admin__nav");
    return () => {
      document.title = "MERN Tour Application";
      document.getElementById("navId").classList.remove("admin__nav");
    };
  }, []);
  return (
    <Stack flexDirection="row" pos="relative">
      <Card minWidth="20%">
        <Sidebar />
      </Card>
      <Box maxWidth="80%">{children}</Box>
    </Stack>
  );
};

export default Layout;
