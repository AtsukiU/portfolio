import Router from "./router/Router";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Header />
      <Box>
        <Router />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
