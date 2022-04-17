import { Heading, IconButton, Flex, Image, Icon } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { FaSun, FaGithub, FaEnvelope } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import HeaderLogoLight from "./pictures/logo teal.400.png";
import HeaderLogoDark from "./pictures/logo teal.png";

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
      <Heading w="100%" size="md" p="2" color="white">
        <Image src={isDark ? HeaderLogoDark : HeaderLogoLight} />
      </Heading>

      <IconButton
        icon={isDark ? <FaSun /> : <BsMoonStarsFill />}
        color={isDark ? "gray.600" : "white"}
        bg={isDark ? "orange.100" : "blue.700"}
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
}

export default Header;
