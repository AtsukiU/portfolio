import React from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import HTMLCSSImage from "./pictures/jackson-so-wUbNvDTsOIc-unsplash.jpg";
import ReactImage from "./pictures/javascript-with-laptop-code.jpg";
import EnglishImage from "./pictures/annie-spratt-askpr0s66Rg-unsplash.jpg";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <Box py={10} w={"100%"} fontWeight={"bold"}>
      <SectionTitle>Skills</SectionTitle>
      <Flex flexWrap={"wrap"} justifyContent="center" pt={10}>
        <SkillCard
          SkillCardImage={HTMLCSSImage}
          SkillCardTitle={"HTML&CSS"}
          SkillCardText={"HTML&CSSの基礎的な技術。HTML&CSSを用いたレイアウト。"}
        />
        <SkillCard
          SkillCardImage={ReactImage}
          SkillCardTitle={"Javascript React"}
          SkillCardText={
            "Javascript、ReactでのWebサイト・Webアプリの制作。ChakraUI,StyledCompornent,FramerMotion,ReactRouter使用経験あり。"
          }
        />
        <SkillCard
          SkillCardImage={EnglishImage}
          SkillCardTitle={"English"}
          SkillCardText={"TOEIC L&R 850取得。ビジネスレベルの英語力。"}
        />
      </Flex>
    </Box>
  );
};

export default Skills;
