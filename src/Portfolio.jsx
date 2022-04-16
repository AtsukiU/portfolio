import { Box, Divider, Center } from "@chakra-ui/layout";
import React from "react";
import Card from "./Card";
import PostItMemo from "./pictures/screencapture-localhost-3001-2022-04-13-23_06_31.png";
import MyPortfolioImage from "./pictures/screencapture-localhost-3000-2022-04-11-18_15_38.png";
import SectionTitle from "./SectionTitle";

const Portfolio = () => {
  return (
    <Box  fontWeight="bold" w={"100%"}>
      <SectionTitle>{"Portfolio"}</SectionTitle>

      <Center pt={10} flexWrap={"wrap"}>
        <Card
          Title1={"React"}
          Title2={"MyPortfolio"}
          image={MyPortfolioImage}
          Text={
            "ポートフォリオサイトをReactとChakraUIを使用し作成しました。見やすいモダンな見た目を意識し、ダークモードも実装しました。"
          }
          onClick={""}
        />
        <Card
          Title1={"React"}
          Title2={"Post It Memo"}
          image={PostItMemo}
          Text={
            "デスク周りに貼る付箋の代わりになるようなWEBアプリを目指し作成しました。利便性を考えモーダルを実装。FireBaseを使いデータ保持も可能に。"
          }
        />
      </Center>
    </Box>
  );
};

export default Portfolio;
