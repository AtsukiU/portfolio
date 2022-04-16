import React from "react";
import { Box, Divider, Flex, Image, Avatar } from "@chakra-ui/react";

const SkillCard = (props) => {
  return (
    <Box minW="330" maxW="370" px={10} py={"40px"}>
      <Box w={"100%"} align={"center"}>
        <Avatar src={props.SkillCardImage} size={"xl"} boxShadow={"xl"} />
      </Box>

      <Box pt={4}>{props.SkillCardTitle}</Box>
      <Box pt={1} fontSize={"sm"} color={"gray"}>
        {props.SkillCardText}
      </Box>
    </Box>
  );
};

export default SkillCard;
