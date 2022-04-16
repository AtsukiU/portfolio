import { Heading, IconButton, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaGithub ,FaEnvelope, FaPhone, FaCandyCane} from "react-icons/fa";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex w="100%" position={"fixed"} zIndex={9999}　bg={isDark ?   "gray.800" :"white"}>
      <Heading w="100%" size="ms" p="2" color={"cyan.500"}>
        MyPortfolio
      </Heading>

      <IconButton
        icon={<FaEnvelope />}
        borderRadius={"0"}
        bg={"transparent"}
        color={"cyan.500"}
      ></IconButton>


      <IconButton
        icon={<FaGithub />}
        borderRadius={"0"}
        bg={"transparent"}
        color={"cyan.500"}
      ></IconButton>

      <IconButton
        icon={isDark ? <FaSun /> : <FaMoon />}
        color="cyan.500"
        inRound="true"
        bg="transeparent"
        borderRadius="0"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
}

export default Header;
