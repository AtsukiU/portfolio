import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

const SectionTitle = (props) => {
  return (
    <>
      <Heading size="md" mb={1}>
        {props.children}
      </Heading>
      <Divider />
    </>
  );
};

export default SectionTitle;
