import React from "react";
import { Stack, Box, Card } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Stack flexDirection='row'>
      <Card width='20%'><Sidebar/></Card>
      <Box width='75%'>{children}</Box>
    </Stack>
  );
};

export default Layout;
