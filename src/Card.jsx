import { Button } from "@chakra-ui/button";
import { Collapse } from "@chakra-ui/transition";
import React from "react";
import {
  Box,
  Image,
  Center,
  useColorModeValue,
  Stack,
  Text,
  Heading,
  Link,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";

export default function Card(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Center py={6} px={4}>
      <Box
        w={"270px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        borderWidth="1px"
        borderRadius="lg"
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        onClick={onToggle}
      >
        <Box
          h={"220px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image src={props.image} h="100%" w="100%" boxShadow={"sm"} />
        </Box>
        <Stack>
          <Text
            color={"blue.400"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {props.Title1}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {props.Title2}

            {/* <Button
              float="right"
              size="sm"
              colorScheme="teal"
              variant="solid"
              onClick={handleToggle}
            >
              {show ? "Close" : "Open"}
            </Button> */}
          </Heading>

          <Collapse in={isOpen}>
            <Badge mt={2} >
              使用技術
            </Badge>
            <Text fontSize={"sm"} color={"gray.500"}>{props.Skilltext}</Text>
            <Badge mt={2}>
              制作期間
            </Badge>
            <Text fontSize={"sm"} color={"gray.500"}>{props.term}</Text>
            <Text mt={3}　fontSize={"sm"} color={"gray.500"} >
              {props.Text}
            </Text>

            <Center>
              <Button
                p={4}
                my={5}
                mx={4}
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                <Link href={props.SiteURL}>View Portfolio</Link>
              </Button>
            </Center>
          </Collapse>
        </Stack>
      </Box>
    </Center>
  );
}
