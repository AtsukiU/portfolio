import React from "react";
import {
  Box,
  Text,
  useDisclosure,
  Collapse,
  Badge,
  Flex,
  Center,
  Stack,
  Image,
  Heading,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import AvatarImage from "./pictures/IMG_9672.jpg";
import { Link as RouteLink } from "react-router-dom";

const MyAvatar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box pb={5} mt={5}>
      <Box>
        <Center py={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ base: "400px", md: "540px" }}
            mx={{ base: "20px", md: "20px" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"xl"}
            padding={4}
          >
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                maxH="400"
                src={AvatarImage}
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Atsuki Ueda
              </Heading>
              <Text fontSize="sm" fontWeight={600} color={"gray.500"} mb={4}>
                植田 充輝
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
                size={"xs"}
              >
                Web engineer from Yamanashi Japan.I love design and new
                technology.
              </Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #travel
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #guitar
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #music
                </Badge>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  as={RouteLink}
                  to={"/contact"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  as={RouteLink}
                  to={"/portfolio"}
                  // onClick={onToggle}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  {/* {isOpen ? "Close" : "See More"} */}
                  Portfolio
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
      </Box>

      <Box maxW={"3xl"} px={4} mt={23} mx="auto">
        <Flex pb={2}>
          <Badge h={5} colorScheme="blue">
            出身
          </Badge>
          　
          <Box fontSize="sm" pl={6}>
            山梨県
          </Box>
        </Flex>
        <Flex pb={4}>
          <Badge h={5} colorScheme="blue">
            年齢
          </Badge>
          　
          <Box fontSize="sm" pl={6}>
            24歳
          </Box>
        </Flex>
        <Flex pb={4}>
          <Badge h={5} colorScheme="blue">
            自己紹介
          </Badge>
          　
          <Box fontSize="sm" overflowWrap="wrap">
            山梨県生まれ。大学卒業後某インフラ金融系企業に営業・事務として勤務。
            <br />
            働く中で常に新しいことに挑戦することや、自分で何かを作ることが自分のモチベーションであると再認識し、ITの世界に身を置きたいと考えました。
            今後も新しい知識をアップデートし続けて行きます。お声がけ頂ければと思います。
          </Box>
        </Flex>
        <Flex pb={4}>
          {" "}
          <Badge h={5} colorScheme="blue">
            趣味
          </Badge>
          　
          <Box fontSize="sm" pl={6}>
            気になったら取り敢えず挑戦してみるタイプなので、ギター弾いたり、アクアリウム始めたり、パソコン組んでみたり、英語の勉強してみたり、本を読んだり、色々なことに挑戦しています。中高サッカー部なのでサッカーも大好きで、定期的にやってます。
          </Box>
        </Flex>
        <Flex pb={4}>
          <Badge h={5} colorScheme="blue">
            長所
          </Badge>
          　
          <Box fontSize="sm" pl={6}>
            継続力・集中力には自信があります。
          </Box>
        </Flex>

        <Flex pb={4}>
          <Badge h={5} colorScheme="blue">
            資格
          </Badge>
          　
          <Box fontSize="sm" pl={6}>
            TOEIC 850 普通自動車免許
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MyAvatar;
