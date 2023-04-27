import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import profile from "../assets/profile.png";
export const Home = () => {
  return (
    <Center>
      <Box mt={10}>
        <Flex
          w={"100%"}
          justifyContent={"center"}
          gap={[20, 10]}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Box>
            <Center>
              <Image src={profile} />
            </Center>
          </Box>

          <Box
            w={["70%", "70%", "50%"]}
            justifyContent={"center"}
            border={1}
            borderColor={"red"}
            margin={["auto", "auto", "40px", "70px"]}
          >
            <Heading>Hy! I Am </Heading>

            <Heading color={"orange"}>Aashish Kumar</Heading>
            <Text fontSize={"xl"} textAlign={"justify"}>
              A passionate Skilled and result-oriented full-stack Web developer
              with an expertise in MERN stack. Focused and curious, with a keen
              interest in building creative web applications
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};
