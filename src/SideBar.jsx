import React from "react";
import { Link, Box, Stack } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/color-mode";

const SideBar = () => {
  const navItem = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Skill", href: "/skill" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];
  const HoverBgColor = useColorModeValue("gray.100", "gray.600");

  return (
    <Box pt={3} px={2} pb={4} display={{ md: "none" }}>
      <Stack spacing={4} color={useColorModeValue("gray.500", "gray.300")}>
        {navItem.map((nav) => (
          <Box
            key={nav.label}
            rounded={"md"}
            _hover={{ bg: HoverBgColor, textDecoration: "none" }}
            to={nav.href}
            as={RouteLink}
          >
            <Link my={2}>{nav.label}</Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SideBar;
