import {
  IconButton,
  Flex,
  Image,
  Link,
  Box,
  useDisclosure,
  Stack,
  Collapse,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouteLink } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import HeaderLogoLight from "./pictures/logo teal.400.png";
import HeaderLogoDark from "./pictures/logo teal.png";
import SideBar from "./SideBar";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const HoverBgColor = useColorModeValue("gray.100", "gray.600");

  const navItem = [
    { label: "Portfolio", href: "/" },
    { label: "Skill", href: "/skill" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Box>
      <Flex
        py={{ base: 2 }}
        px={{ base: 4 }}
        minH={"60px"}
        w="100%"
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        bg={isDark ? "gray.800" : "white"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={isOpen ? onClose : onOpen}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box
            minW={"120px"}
            color="white"
            justyfy={{ base: "center", md: "left" }}
            as={RouteLink}
            to={"/"}
          >
            <Image src={isDark ? HeaderLogoDark : HeaderLogoLight} />
          </Box>
          <Flex
            color={useColorModeValue("gray.500", "gray.400")}
            display={{ base: "none", md: "flex" }}
            justify={"space-between"}
            ml={10}
          >
            <Box>
              {navItem.map((nav) => (
                <Link
                  ml={7}
                  px={1}
                  key={nav.label}
                  to={nav.href}
                  as={RouteLink}
                  rounded={"md"}
                  _hover={{ bg: HoverBgColor, textDecoration: "none" }}
                >
                  {nav.label}
                </Link>
              ))}
            </Box>
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"}>
          <IconButton
            icon={isDark ? <FaSun /> : <BsMoonStarsFill />}
            color={isDark ? "gray.600" : "white"}
            bg={isDark ? "orange.100" : "blue.400"}
            onClick={toggleColorMode}
          ></IconButton>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box>
          <SideBar />
        </Box>
      </Collapse>
    </Box>
  );
}

export default Header;
