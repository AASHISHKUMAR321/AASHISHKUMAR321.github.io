import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { AllRoutes } from "./components/AllRoutes";
import { About } from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="App">
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
