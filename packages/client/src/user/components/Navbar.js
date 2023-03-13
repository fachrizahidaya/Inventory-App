import React from "react";
import { Box, Flex, Divider } from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";
import { Icon } from "@chakra-ui/icons";
import { SearchIcon } from "@chakra-ui/icons";

export const NavbarUser = () => {
  return (
    <div>
      <Box w={"1507px"} h="72px">
        <Flex ml={"20px"} w={"1416px"} h="72px">
          <Box w={"115px"} h="42px">
            Logo
          </Box>
          <Box w={"115px"}>By Categories</Box>
          <Box w={"115px"}>By Brands</Box>
          <Box w={"115px"}>Top Picks</Box>
          <Box w={"115px"}>
            <SearchIcon />
          </Box>
          <Flex w={"115px"}>
            <Box>Login</Box>
            <Divider orientation="vertical" />
            <Box>Register</Box>
          </Flex>
          <Box w={"115px"}>
            <Icon as={BiShoppingBag} />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};
