import React from "react";
import { Box, Divider } from "@chakra-ui/react";

const SectionTitle = (props) => {
  return (
    <Box w={"83%"} mx="auto"  color={"cyan.500"}>
      <Box fontSize={"2xl"}>{props.children}</Box>
      <Divider />
    </Box>
  );
};

export default SectionTitle;
