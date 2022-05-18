import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import Transitions from "../Transitions";
import { motion } from "framer-motion";

const SchoolAndJob = () => {
  return (
    <Transitions>
      <Box fontWeight="bold" h="100vh">
        <SectionTitle>Education and Work Experience</SectionTitle>

        <Box w={"84%"} mx="auto" justifyContent={"center"}>
          <Flex
            p={6}
            mt={6}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            borderWidth="1px"
            borderRadius="lg"
            rounded={"md"}
            overflow={"hidden"}
            flexWrap={"wrap"}
          >
            <Box>インフラ系企業・営業事務</Box>　
            <Box color={"gray"}>2020.4 - 2022</Box>
          </Flex>
          <Flex
            p={6}
            mt={6}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            borderWidth="1px"
            borderRadius="lg"
            rounded={"md"}
            overflow={"hidden"}
            flexWrap={"wrap"}
          >
            <Box>専修大学　</Box> <Box pr={4}>経済学部経済学科</Box>
            <Box color={"gray"}>2016.4-2020.3</Box>
          </Flex>
        </Box>
      </Box>
    </Transitions>
  );
};

export default SchoolAndJob;
