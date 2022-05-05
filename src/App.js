import Router from "./router/Router";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App">
      <Header />
      <Box minH="100vh">
        <Router />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
