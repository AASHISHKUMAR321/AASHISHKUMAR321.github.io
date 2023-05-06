import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  Switch,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export const Navbar = () => {
  const home = useRef(null);
  const about = useRef(null);
  const education = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const navLinks = [
    { name: "Home", to: "/", ref: home },
    { name: "About", to: "/about", ref: about },
    { name: "Education", to: "/education", ref: education },
    { name: "Skills", to: "/skills", ref: skills },
    { name: "Resume", to: "/resume", ref: "" },
    { name: "Contact", to: "/contact", ref: contact },
    // { name: <Switch />, to: "" },
  ];
  const scrolltosection = (eleRef) => {
    window.scrollTo({
      top: eleRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box
      mt={0}
      p={0.11}
      h={10}
      // style={{ backgroundColor: "#0a192f", color: "white" }}
    >
      <HStack
        spacing={3}
        alignItems={"center"}
        w={"100%"}
        mt={3}
        display={{ base: "none", md: "flex" }}
        position={"fixed"}
        bg={"#0a192f"}
        p={4}
        m={0}
      >
        {navLinks.map((e, i) => (
          <Box
            m={"auto"}
            fontSize={20}

            //   border="1px"
            //   borderColor="black.200"
          >
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink
                  _hover={{ color: "#64ffda" }}
                  onClick={() => scrolltosection(e.ref)}
                >
                  {e.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        ))}
        {/* <Switch /> */}
      </HStack>
      <HStack display={{ base: "flex", md: "none" }}>
        <Box
          w={"100%"}
          display={"flex"}
          justifyContent={"end"}
          margin={0}
          p={0}
        >
          <Button
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            m={4}
            position={"fixed"}
          >
            <HamburgerIcon></HamburgerIcon>
          </Button>
        </Box>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent gap={2} bg={"#0a192f"} color={"white"}>
            <DrawerCloseButton />
            <VStack>
              {navLinks.map((e, i) => (
                <Box
                  m={"auto"}
                  fontSize={20}
                  mt={10}

                  //   border="1px"
                  //   borderColor="black.200"
                >
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        as={Link}
                        to={e.to}
                        _hover={{ color: "#64ffda" }}
                        onClick={() => {
                          scrolltosection(e.ref);
                          onClose();
                        }}
                      >
                        {e.name}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Box>
              ))}
            </VStack>
          </DrawerContent>
        </Drawer>
      </HStack>
      <Home ref={home} />
      <About ref={about} />
      <Education ref={education} />
      <Skills ref={skills} />
      <Contact ref={contact} />
    </Box>
  );
};

export default Navbar;
