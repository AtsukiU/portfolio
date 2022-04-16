import { Heading, IconButton, Flex } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaGithub, FaEnvelope } from "react-icons/fa";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const MainColor = useColorModeValue("teal.400", "teal.100");

  return (
    <Flex
      w="100%"
      position={"fixed"}
      p={3}
      zIndex={9999}
      bg={isDark ? "gray.800" : "white"}
    >
      <Heading w="100%" size="md" p="2" color={MainColor}>
        MyPortfolio
      </Heading>

      <IconButton
        icon={<FaEnvelope />}
        bg={"transparent"}
        color="gray.400"
      ></IconButton>

      <IconButton
        icon={<FaGithub />}
        bg={"transparent"}
        color="gray.400"
      ></IconButton>

      <IconButton
        icon={isDark ? <FaSun /> : <BsMoonStarsFill />}
        color={isDark ? "gray.600" : "white"}
        bg={isDark ? "orange.100" : "blue.400"}
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
}

export default Header;
