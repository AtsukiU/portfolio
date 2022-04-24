import React from "react";
import MyAvatar from "../MyAvatar";
import Portfolio from "../Portfolio";
import Transitions from "../Transitions";

const MainPage = () => {
  return (
    <Transitions>
      <MyAvatar />
      <Portfolio />
    </Transitions>
  );
};

export default MainPage;
