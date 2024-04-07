import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'

const SideDrawer = () => {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingChat, setLoadingChat] = useState()

  return (
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
    >
      <Tooltip label="Search users to chat" hasArrow placement="bottom-end">
        <Button
          variant="ghost"
          className=" d-flex align-items-center justify-content-between"
        >
          <i class="ri-search-line"></i>
          <Text d={{ base: "none", md: "flex" }} px="4">
            Search User
          </Text>
        </Button>
      </Tooltip>
      <Text fontSize="2x1" fontFamily="Work sans">
        Chat with Experts
      </Text>
    </Box>
  );
}

export default SideDrawer