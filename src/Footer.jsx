import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      color="gray"
      fontSize="xs"
      pb={1}
      w={"100%"}
      bottom={"0"}
      align={"center"}
    >
      &copy; 2022 Atsuki Ueda. All Rights Reserved.{" "}
    </Box>
  );
};

export default Footer;
