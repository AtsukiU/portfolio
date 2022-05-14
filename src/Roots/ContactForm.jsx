import React, { useRef, useState } from "react";
import SectionTitle from "../SectionTitle";
import {
  Box,
  Button,
  VStack,
  InputGroup,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  InputLeftElement,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { MdOutlineEmail, MdPersonOutline } from "react-icons/md";

//emailjs
import { send } from "emailjs-com";
import Transitions from "../Transitions";

const ContactForm = () => {
  const [name, setName] = useState(""); // 氏名
  const [mail, setMail] = useState(""); // メールアドレス
  const [message, setMessage] = useState(""); // メッセージ

  const disableSend = name === "" || mail === "" || message === ""; //入力不備で送信不可

  const handleOnSend = (e) => {
    e.preventDefault();
    send(
      "service_51l5n2n",
      "template_3efd6mq",
      { name, mail, message },
      "BMphNzjpmfVJIvv-z"
    )
      .then((response) => {
        console.log("Message send", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed", err);
      });

    window.alert("お問い合わせを送信致しました。");
    setName("");
    setMail("");
    setMessage("");
  };

  return (
    <Transitions>
      <Box>
        <SectionTitle>Contact</SectionTitle>
        <form onSubmit={handleOnSend}>
          <VStack
            mx={"auto"}
            mb={20}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            borderWidth="1px"
            borderRadius="lg"
            rounded={"md"}
            px={{ base: 4, sm: 8, md: 10 }}
            pt={10}
            pb={5}
            overflow={"hidden"}
            w={{ base: 300, sm: 400, md: 700 }}
          >
            <FormControl onSubmit={handleOnSend}>
              <FormLabel>Your Name</FormLabel>
              <InputGroup>
                <InputLeftElement
                  children={<MdPersonOutline />}
                  color={"gray.400"}
                />

                <Input
                  type={"text"}
                  name={"name"}
                  value={name}
                  placeholder={"Your Name"}
                  onChange={(e) => {
                    setName(e.target.value);
                  }} //nameinput//////////////////////////
                ></Input>
              </InputGroup>
              <FormLabel pt={8}>Email</FormLabel>
              <InputGroup>
                <InputLeftElement
                  children={<MdOutlineEmail />}
                  color={"gray.400"}
                />
                <Input
                  type={"email"}
                  placeholder={"Your Email"}
                  value={mail}
                  name={"mail"}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }} //mail input //////////////////////
                ></Input>
              </InputGroup>
              <FormLabel pt={8}>Message</FormLabel>{" "}
              <InputGroup>
                <Textarea
                  type={"text"}
                  placeholder={"Your Message"}
                  value={message}
                  name={"message"}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }} //textinput/////////////////////////
                ></Textarea>
              </InputGroup>
              <Button
                mt={6}
                mb={2}
                p={3}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                type={"submit"}
                disabled={disableSend}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Send Message
              </Button>
            </FormControl>
          </VStack>
        </form>
      </Box>
    </Transitions>
  );
};

export default ContactForm;
