import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SkillCard from "../SkillCard";
import HTMLCSSImage from "../pictures/code.png";
import ReactImage from "../pictures/atom.png";
import EnglishImage from "../pictures/english.png";
import SectionTitle from "../SectionTitle";
import GithubImage from "../pictures/github.png";
import Transitions from "../Transitions";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const settings = {
    infinite: true,
    speed: 4000,
    autoplaySpeed: 1,
    autoplay: true,
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Transitions>
      <Box w="100%" overflow={"hidden"} align={"center"} pb={20}>
        <SectionTitle>Skill</SectionTitle>

        <Slider {...settings}>
          <SkillCard
            SkillCardImage={HTMLCSSImage}
            SkillCardTitle={"HTML&CSS"}
            SkillCardText={
              "HTML&CSSの基礎的な技術。HTML&CSSを用いたレイアウト。"
            }
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
        </Slider>
      </Box>
    </Transitions>
  );
};

export default Skills;
