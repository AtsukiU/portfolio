import Header from "./Header";
import MyAvatar from "./MyAvatar";
import SchoolAndJob from "./SchoolAndJob";
import { VStack, Box } from "@chakra-ui/react";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./Footer";


function App() {

  

  return (
    <Box w="88%" mx="auto">
      <VStack>
        <Header />
        <MyAvatar />
        <Portfolio />
        <Skills />
        <SchoolAndJob />
        <Footer/>
      </VStack>
    </Box>
  );
}

export default App;
