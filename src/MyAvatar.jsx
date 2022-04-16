import React from "react";
import { Box, Text, Avatar } from "@chakra-ui/react";
import AvatarImage from "./pictures/MyProfileImage.jpg";

const MyAvatar = () => {
  return (
    <Box align={"center"} pb={10}>
      <Box pt="60px">
        <Avatar
          size="2xl"
          src={AvatarImage}
          layout="fill"
          boxShadow="2xl"
          borderColor={"whiteAlpha.800"}
          borderWidth={2}
          borderStyle="solid"
        ></Avatar>
      </Box>
      <Text alignItems="none" fontSize="3xl" fontWeight="bold" pt={"30px"}>
        Atsuki Ueda
      </Text>

      <Text color="gray" fontSize={"md"}>
        1998.02.06 Age24
      </Text>
    </Box>
  );
};

export default MyAvatar;
