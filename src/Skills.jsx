import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import HTMLCSSImage from "./pictures/code.png";
import ReactImage from "./pictures/atom.png";
import EnglishImage from "./pictures/english.png";
import SectionTitle from "./SectionTitle";
import GithubImage from "./pictures/github.png";

const Skills = () => {
  return (
    <Box py={10} w="100%" fontWeight={"bold"}>
      <SectionTitle>Skills</SectionTitle>
      <Flex minW="320" maxW="950" mx="auto" flexWrap={"wrap"}>
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
          SkillCardImage={GithubImage}
          SkillCardTitle={"Github"}
          SkillCardText={"Git,Githubを使ったレポジトリーの管理,ページの公開"}
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
