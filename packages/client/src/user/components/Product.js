import { Box, Flex } from "@chakra-ui/react";
import { ProductCard } from "../molecules/Card";

export const ProductUser = () => {
  return (
    <div>
      <Box w={"840px"}>
        <Flex w={"840px"} h="30px" justifyContent={"space-evenly"}>
          <Box>Price</Box>
          <Box>A-Z</Box>
          <Box>Show</Box>
        </Flex>
        <Box w={"856px"}>
          <ProductCard />
        </Box>
      </Box>
    </div>
  );
};
