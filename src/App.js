import Header from "./Header";
import MyAvatar from "./MyAvatar";
import SchoolAndJob from "./SchoolAndJob";
import { VStack, Box } from "@chakra-ui/react";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Box mx="auto" w="88%" maxWidth="1120px">
      <VStack>
        <Header />
        <MyAvatar />
        <Portfolio />
        <Skills />
        <SchoolAndJob />
        <Footer />
      </VStack>
    </Box>
  );
}

export default App;
