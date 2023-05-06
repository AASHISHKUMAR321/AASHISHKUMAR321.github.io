import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import profile from "../assets/profile.png";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import FractalTree from "./FractalTree";
import { EmailIcon, Icon } from "@chakra-ui/icons";
export const Home = forwardRef((props, ref) => {
  return (
    <Center ref={ref} style={{ backgroundColor: "#0a192f", color: "white" }}>
      <Box mt={20}>
        <Flex
          w={"100%"}
          justifyContent={"center"}
          gap={[20, 10]}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Box>
            <Center>
              {/* <Image src={profile} /> */}

              <FractalTree />
            </Center>
          </Box>

          <Box
            w={["70%", "80%", "50%"]}
            justifyContent={"center"}
            alignContent={"center"}
            borderColor={"red"}
            margin={["auto", "auto", "80px", "130px"]}
          >
            <Box>
              <Typist avgTypingDelay={120}>
                <span
                  className="intro-title"
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    textAlign: "center",
                  }}
                >
                  {"hi,"}
                  <span className="intro-name" style={{ color: "#64ffda" }}>
                    {"Aashish"}
                  </span>
                  {" here."}
                </span>
              </Typist>

              <Text fontSize={"xl"} textAlign={"justify"}>
                {/* A passionate Skilled and result-oriented full-stack Web developer
              with an expertise in MERN stack. Focused and curious, with a keen
              interest in building creative web applications */}
                I'm a Instructional Associate at Masai. I have great interest in
                full-stack development, human-computer interactions, and
                everything in between.
              </Text>
            </Box>
          </Box>
        </Flex>
        <HStack w={["70%", "80%"]} margin={"auto"}>
          <Button
            color={"#64ffda"}
            fontSize={30}
            fontWeight={"bold"}
            bgColor={"transparent"}
            border={"0.1px solid white"}
            borderRadius={7}
            p={8}
            _hover={{ bg: "white" }}
            mt={[0, 10]}
          >
            <EmailIcon />
            {"  " + "Say hi!"}
          </Button>
        </HStack>
      </Box>
    </Center>
  );
});
