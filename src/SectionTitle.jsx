import React from "react";
import { Heading,Center} from "@chakra-ui/react";

const SectionTitle = (props) => {
  return (
    <Center   pt={20} pb={20}>
      <Heading   fontSize={"4xl"}>
        {props.children} 
      </Heading>
    </Center>
  );
};

export default SectionTitle;
