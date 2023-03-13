import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Axios from "axios";

export const ProductCard = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  console.log(process.env.REACT_APP_API_URL)

  const listProduct = async () => {
    try {
      const res = await Axios.get(
        `http://localhost:8000/product/list`
        // `${process.env.REACT_APP_API_URL}/product/list`
      );
      console.log(res.data);
      setData(res.data);
      // dispatch(syncData(res.data.result));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    listProduct();
  }, []);

  return (
    <div>
      <Wrap>
        {data?.map((item) => {
          return (
            <Card w={"198px"} h="357px">
              <CardBody>
                <Image
                  boxSize={"182px"}
                  src={`http://localhost:8000/${item.picture}`}
                />
                <Stack mt="3" spacing="1">
                  <Text>{item.name}</Text>
                  <Text></Text>
                  <Text color="blue.600"></Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Icon as={BiShoppingBag} />
              </CardFooter>
            </Card>
          );
        })}
      </Wrap>
    </div>
  );
};
