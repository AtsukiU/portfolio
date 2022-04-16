import React from "react";
import { Box, Image } from "@chakra-ui/react";

const SkillCard = (props) => {
  return (
    <Box minW="310" w={310} px={10} pt={9}>
      <Box w={"100%"} align={"center"} bg="transparent">
        <Image w={56} src={props.SkillCardImage} />
      </Box>

      <Box pt={4}>{props.SkillCardTitle}</Box>
      <Box pt={1} fontSize={"sm"} color={"gray"}>
        {props.SkillCardText}
      </Box>
    </Box>
  );
};

export default SkillCard;
