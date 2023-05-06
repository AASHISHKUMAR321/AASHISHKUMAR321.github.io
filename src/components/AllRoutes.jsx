import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Home } from "./Home";
import { Skills } from "./Skills";
import { Box } from "@chakra-ui/react";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/resume" element={"#"} />

      {/* <Box>{Navbar()}</Box> */}
    </Routes>
  );
};
