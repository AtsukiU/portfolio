import React from "react";
import {
  Box,
  Text,
  Avatar,
  IconButton,
  useDisclosure,
  Collapse,
  Badge,
  Flex,
} from "@chakra-ui/react";
import AvatarImage from "./pictures/MyProfileImage.jpg";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const MyAvatar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100%" pb={10}>
      <Box align={"center"}>
        <Box pt="100px">
          <Avatar
            size="2xl"
            src={AvatarImage}
            layout="fill"
            boxShadow="2xl"
            borderColor="white"
            borderWidth={2}
            borderStyle="solid"
          ></Avatar>
        </Box>
        <Text alignItems="none" fontSize="3xl" fontWeight="bold" pt={"30px"}>
          Atsuki Ueda
        </Text>

        <Text color="gray" fontSize={"md"}>
          1998.02.06 Age24
        </Text>
        <IconButton
          icon={isOpen ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
          mt={5}
          bg="transparent"
          onClick={onToggle}
        ></IconButton>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box maxW={500} mt={23} mx="auto">
          <Flex pb={2}>
            <Badge h={5} colorScheme="teal">
              出身
            </Badge>
            　
            <Box fontSize="sm" pl={6}>
              山梨県
            </Box>
          </Flex>
          <Flex pb={2}>
            <Badge h={5} colorScheme="teal">
              年齢
            </Badge>
            　
            <Box fontSize="sm" pl={6}>
              24歳
            </Box>
          </Flex>
          <Flex pb={2}>
            {" "}
            <Badge h={5} colorScheme="teal">
              趣味
            </Badge>
            　
            <Box fontSize="sm" pl={6}>
              プログラミング　サッカー　釣り　アクアリウム　お酒　ギター　ゲーム　旅行　自作PC
            </Box>
          </Flex>
          <Flex pb={2}>
            <Badge h={5} colorScheme="teal">
              長所
            </Badge>
            　
            <Box fontSize="sm" pl={6}>
              集中力　好奇心　独学力
            </Box>
          </Flex>
          <Flex pb={2}>
            <Badge h={5} colorScheme="teal">
              自己紹介
            </Badge>
            　
            <Box fontSize="sm">
              独学で始めたプログラミングに夢中になり、自主的に制作を行なっています。新しいことを学ぶことが好きなので、今後も楽しみながらやっていきたいと考えています。
            </Box>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default MyAvatar;
