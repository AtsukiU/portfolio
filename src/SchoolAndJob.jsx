import React from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";

const SchoolAndJob = () => {
  return (
    <Box fontWeight="bold" w={"100%"}>
      <SectionTitle>Education and Work Experience</SectionTitle>
      <Box w={"84%"} mx="auto" justifyContent={"center"}>
        <Flex
          p={6}
          mt={6}
          rounded={"md"}
          bg={useColorModeValue("gray.100", "gray.700")}
          boxShadow={"xl"}
          flexWrap={"wrap"}
        >
          <Box>日本郵便株式会社</Box>　<Box color={"gray"}>2020.4 - 2022</Box>
        </Flex>
        <Flex
          p={6}
          mt={6}
          rounded={"md"}
          bg={useColorModeValue("gray.100", "gray.700")}
          boxShadow={"xl"}
          flexWrap={"wrap"}
        >
          <Box>専修大学　</Box> <Box pr={4}>経済学部経済学科</Box>
          <Box color={"gray"}>2016.4-2020.3</Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SchoolAndJob;
