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
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Education", to: "/education" },
    { name: "Skills", to: "/skills" },
    { name: "Resume", to: "/resume" },
    { name: "Contact", to: "/contact" },
    // { name: <Switch />, to: "" },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box mt={0} p={0.11} h={10}>
      <HStack
        spacing={3}
        alignItems={"center"}
        w={"92%"}
        mt={3}
        display={{ base: "none", md: "flex" }}
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
                  as={Link}
                  to={e.to}
                  _hover={{ color: "#64ffda" }}
                >
                  {e.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        ))}
        <Switch />
      </HStack>
      <HStack display={{ base: "flex", md: "none" }}>
        <Box
          w={"100%"}
          display={"flex"}
          justifyContent={"end"}
          margin={0}
          p={0}
        >
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen} m={4}>
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
          <DrawerContent gap={2}>
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
                      <BreadcrumbLink as={Link} to={e.to} onClick={onClose}>
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
    </Box>
  );
};
