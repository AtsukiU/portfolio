import React from "react";
import { Box, Image ,Button} from "@chakra-ui/react";

const SkillCard = (props) => {
  return (
    <Box minW="300" w={300} px={5} pb={10}>
      <Box w={"100%"} align={"center"} bg="transparent" >
        <Image  src={props.SkillCardImage} />
      </Box>

      <Box pt={4} fontSize={"xl"}  fontWeight={"bold"}>{props.SkillCardTitle}</Box>
      <Box pt={1}  fontSize={"sm"} color={"gray.500"}>
        {props.SkillCardText}
      </Box>
      
    </Box>
  );
};

export default SkillCard;
