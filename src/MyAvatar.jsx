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
    <Box pb={5}>
      <Box>
        {/* <Flex pt="20px" justifyContent="center">
          <Avatar
            size="2xl"
            src={AvatarImage}
            layout="fill"
            boxShadow="2xl"
            borderColor="white"
            borderWidth={2}
            borderStyle="solid"
          ></Avatar>
          <Box pl={5}>
            <Text
              alignItems="none"
              fontSize="3xl"
              fontWeight="bold"
              pt={"15px"}
            >
              Atsuki Ueda
            </Text>

            <Text color="gray" fontSize={"md"}>
              植田 充輝
              <br />
              1998.02.06 Age24
            </Text>
            <IconButton
              icon={isOpen ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
              mt={5}
              bg="transparent"
              onClick={onToggle}
            ></IconButton>
          </Box>
        </Flex> */}

        <Center py={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ base: "400px", md: "540px" }}
            mx={{ base: "20px", md: "20px" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            padding={4}
          >
            <Flex flex={1} bg="blue.200">
              <Image objectFit="cover" boxSize="100%" src={AvatarImage} />
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
                <Link href={"https://github.com/AtsukiU/"} color={"blue.400"}>
                  Github＠AtsukiU
                </Link>
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
                  onClick={onToggle}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  {isOpen ? "Close" : "See More"}
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
        {/* <Center>
          <IconButton
            icon={isOpen ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
            bg="transparent"
            onClick={onToggle}
          ></IconButton>
        </Center> */}
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box maxW={1000} px={4} mt={23} mx="auto">
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
            {" "}
            <Badge h={5} colorScheme="blue">
              趣味
            </Badge>
            　
            <Box fontSize="sm" pl={6}>
              気になったら取り敢えず挑戦してみるタイプなので、ギター弾いたり、アクアリウム始めたり、パソコン組んでみたり、英語の勉強してみたり、色々なことに挑戦しています。中高サッカー部なのでサッカーも大好きで、定期的にやってます。
            </Box>
          </Flex>
          <Flex pb={4}>
            <Badge h={5} colorScheme="blue">
              長所
            </Badge>
            　
            <Box fontSize="sm" pl={6}>
              好きなことへの集中力・継続力には自信があります。自分の目標への継続力には自信があります。
            </Box>
          </Flex>
          <Flex pb={4}>
            <Badge h={5} colorScheme="blue">
              自己紹介
            </Badge>
            　
            <Box fontSize="sm" overflowWrap="wrap">
              山梨県生まれ。大学卒業後某金融機関に勤務。サービス開発をするエンジニアやweb製作に興味があります。独学で学習中。
              <br />
              現在reactでchakraUI、FramerMotion、ReactRouter、FireBaseなどの技術を身につけています。Nextjs・PHPも学習中。
              <br />
              フロント・バックエンド問わず、今後も学習し、価値を生み出せるエンジニアになりたいと考えています。
              <br />
              常に新しいことに挑戦することが自分のモチベーションであることに気づき、移り変わりが激しく常に学習の必要があるITの世界に身を置きたいと考えました。
              今後も新しい知識をアップデートし続け、自分ではなくてはダメだと思わせるようなエンジニアになりたいと考えています。
              この業界に情熱を注げる自信がありますので、是非お声がけ頂ければと思います。
            </Box>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default MyAvatar;
