import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import { Navbar } from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { AllRoutes } from "./components/AllRoutes";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="App">
      {/* <Navbar /> */}
      {/* <AllRoutes /> */}
      <Navbar />
      {/* <Home />
      <About />
      <Education />
      <Skills />
      <Contact /> */}
    </Box>
  );
}

export default App;
