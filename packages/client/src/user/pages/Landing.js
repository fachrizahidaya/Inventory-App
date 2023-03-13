import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { FilterUser } from "../components/Filter";
import { NavbarUser } from "../components/Navbar";
import { ProductUser } from "../components/Product";

export const LandingUser = () => {
  return (
    <div>
      <NavbarUser />
      <Box w={"1507px"}>
        <Flex w={"1126px"}>
          <FilterUser />
          <ProductUser />
        </Flex>
      </Box>
    </div>
  );
};
