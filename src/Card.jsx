import React from "react";
import {
  Box,
  Image,
  Center,
  useColorModeValue,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";

export default function Card(props) {
  return (
    <Center  py={6} px={4}>
      <Box
        h={"420px"}
        w={"280px"}
        bg={useColorModeValue("gray.100", "gray.700")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"220px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          
        >
          <Image src={props.image} h="100%" w="100%" boxShadow={"sm"}  />
        </Box>
        <Stack>
          <Text
            color={"cyan.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {props.Title1}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {props.Title2}
          </Heading>
          <Text color={"gray.500"} fontSize={"sm"}>
            {props.Text}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
