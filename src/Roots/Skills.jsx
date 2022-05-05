import React from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  SimpleGrid,
  Container,
  Text,
  Image,
  Avatar,
} from "@chakra-ui/react";
import SkillCard from "../SkillCard";

import HTMLCSSImage from "../pictures/code.png";
import ReactImage from "../pictures/atom.png";
import EnglishImage from "../pictures/english.png";
import GithubImage from "../pictures/github.png";
import NextImage from "../pictures/nextjs.png";

import SectionTitle from "../SectionTitle";
import Transitions from "../Transitions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Skills = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    autoplay: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScrool: 1,
    centerPadding: 50,
    cssEase: "linear",
  };

  const SliderImages = [
    HTMLCSSImage,
    ReactImage,
    EnglishImage,
    GithubImage,
    NextImage,
  ];

  return (
    <Box p={4}>
      <Stack
        py={10}
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
      >
        <Heading fontSize={"3xl"}>Skills</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          現在習得している言語・技術・フレームワーク・ライブラリなど
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <SkillCard
            SkillCardTitle={"HTML&CSS"}
            SkillCardText={"HTML&CSSを用いたレイアウト。"}
          />
          <SkillCard
            SkillCardTitle={"Github"}
            SkillCardText={"Git・Githubを使ったリポジトリの管理,ページの公開"}
          />
          <SkillCard
            SkillCardTitle={"English"}
            SkillCardText={"TOEIC L&R 850取得。ビジネスレベルの英語力。"}
          />
          <SkillCard
            SkillCardTitle={"Javascript"}
            SkillCardText={
              "React・NEXTを使用したSPAでのWEB製作・WEBアプリの作成。 "
            }
          />

          <SkillCard
            SkillCardTitle={"CSS Framework"}
            SkillCardText={"ChakraUI・TailwindCSS"}
          />

          <SkillCard
            SkillCardTitle={"Animation"}
            SkillCardText={"FramerMotion・ReactSlick"}
          />
        </SimpleGrid>
      </Container>

      <Box my="20" justifyContent="center" mx="auto">
        <Slider {...settings}>
          {SliderImages.map((img, index) => {
            return (
              <Box key={index}>
                <Image
                  objectFit="cover"
                  boxSize={{ base: "20", sm: "100", md: "130", lg: "130" }}
                  src={img}
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default Skills;
