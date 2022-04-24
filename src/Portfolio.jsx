import { Box, Center } from "@chakra-ui/layout";
import React from "react";
import Card from "./Card";
import PostItMemo from "./pictures/screencapture-localhost-3001-2022-04-13-23_06_31.png";
import MyPortfolioImage from "./pictures/screencapture-localhost-3000-2022-04-11-18_15_38.png";
import edit from "./pictures/New file.png";

const Portfolio = () => {
  return (
    <Box fontWeight="bold" pb={10} >
      <Center flexWrap={"wrap"}>
        <Card
          Title1={"React"}
          Title2={"MyPortfolio"}
          image={MyPortfolioImage}
          Skilltext={"#FramerMotion #ChakraUi #EmailJS #ReactRouter"}
          term={"2ヶ月"}
          Text={
            "自身のポートフォリオサイトを制作、モダンなレイアウトを意識し、ダークモードやSPAも実装しました。お問合せフォームも実装、Gmailでの受信が可能です。レスポンシブデザイン対応。"
          }
          SiteURL={"https://portfolio-beta-murex-17.vercel.app/"}
        />
        <Card
          Title1={"React"}
          Title2={"Post It Memo"}
          image={PostItMemo}
          Skilltext={"#FramerMotion #FireBase"}
          term={"1ヶ月"}
          Text={
            "デスク周りに貼る付箋の代わりになるようなWEBアプリを目指し作成しました。利便性を考えモーダルを実装。FireBaseを使いデータ保持も可能に。"
          }
          SiteURL={"https://react-post-it.vercel.app/"}
        />
        <Card
          Title1={"PHP+(next.js or react)"}
          Title2={"EC(作成中)"}
          image={edit}
          Skilltext={"(#FramerMotion + #chakraUI) "}
          Text={
            " ECデモサイトをバックエンドをPHP、フロントはreactかnextjsで作成予定"
          }
          SiteURL={""}
        />
      </Center>
    </Box>
  );
};

export default Portfolio;
