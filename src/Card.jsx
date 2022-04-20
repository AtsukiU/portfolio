import { Button } from "@chakra-ui/button";
import { Collapse } from "@chakra-ui/transition";
import React, { useState } from "react";
import {
  Box,
  Image,
  Center,
  useColorModeValue,
  Stack,
  Text,
  Heading,
  Link,
  Flex,
  Badge,
} from "@chakra-ui/react";

export default function Card(props) {
  const MainColor = useColorModeValue("teal.400", "teal.100");
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Center py={6} px={4}>
      <Box
        w={"270px"}
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
          <Image src={props.image} h="100%" w="100%" boxShadow={"sm"} />
        </Box>
        <Stack>
          <Text
            color={MainColor}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {props.Title1}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {props.Title2}

            <Button
              float="right"
              size="sm"
              colorScheme="teal"
              variant="solid"
              onClick={handleToggle}
            >
              {show ? "Close" : "Open"}
            </Button>
          </Heading>

          <Collapse in={show}>
            <Badge mt={1} mb={3} colorScheme="teal">
              {props.SkillBadge}
            </Badge>
            <Text color={"gray.500"} fontSize={"sm"}>
              {props.Text}
            </Text>
            <Center>
              <Button w="100%" size="sm" colorScheme="purple" mt={3}>
                <Link href={props.SiteURL}>View Portfolio</Link>
              </Button>
            </Center>
          </Collapse>
        </Stack>
      </Box>
    </Center>
  );
}
