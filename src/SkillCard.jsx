import React from "react";
import {
  Box,
  Image,
  Button,
  Text,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons';

const SkillCard = (props) => {
  return (
    <HStack align={"top"}>
      <Box color={"blue.400"} px={2}>
        <Icon  as={CheckIcon}/>
      </Box>
      <VStack align={"start"}>
        <Text fontWeight={600}>{props.SkillCardTitle}</Text>
        <Text color={"gray.600"}>{props.SkillCardText}</Text>
      </VStack>
    </HStack>
  );
};

export default SkillCard;
