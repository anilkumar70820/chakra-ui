import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  transition,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Hero = () => {
  const [show, setShow] = useState(false);

  // if (show) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "visible";
  // }

  return (
    <>
      <Container maxW={"1140px"} mx={"auto"}>
        <Flex as={"header"} py={"20px"} align={"center"}>
          <Link
            as={"h2"}
            my={0}
            fontFamily={"fontRubik"}
            fontSize={"30px"}
            fontWeight={600}
            textDecoration={"none"}
            textColor={"black"}
          >
            Logo
          </Link>
          <Spacer />
          <UnorderedList
            zIndex={10}
            listStyleType={"none"}
            display={"flex"}
            justifyContent={["center", "center"]}
            flexDirection={["column", "column", "row"]}
            position={["absolute", "absolute", "static"]}
            left={show ? "0" : "-100%"}
            top={0}
            h={["100vh", "100vh", "auto"]}
            w={["100%", "100%", "auto"]}
            bg={["red", "red", "transparent"]}
            gap={"24px"}
            m={0}
            p={0}
            alignItems={"center"}
            transition={"left 500ms linear"}
          >
            <ListItem>
              {" "}
              <Link
              
                href="#grid"
                onClick={() => setShow(!show)}
                fontSize={"20px"}
                fontFamily={"fontRoboto"}
                fontWeight={700}
                textDecoration={"none"}
                textColor={"black"}
              >
                {" "}
                Grid{" "}
              </Link>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <Link
                href="#accordian"
                onClick={() => setShow(!show)}
                fontSize={"20px"}
                fontFamily={"fontPoppins"}
                fontWeight={"700"}
                textDecoration={"none"}
                textColor={"black"}
              >
                {" "}
                Accordian{" "}
              </Link>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <Link
                href="#tabs"
                onClick={() => setShow(!show)}
                fontSize={"20px"}
                fontFamily={"fontInter"}
                fontWeight={600}
                textDecoration={"none"}
                textColor={"black"}
              >
                {" "}
                Tabs{" "}
              </Link>{" "}
            </ListItem>
            <ListItem display={["unset", "none"]}>
              {" "}
              <Button
                onClick={() => setShow(!show)}
                ms={["0", "24px"]}
                bg={"black"}
                px={"24px"}
                py={"12px"}
                color={"white"}
                fontSize={"20px"}
                fontWeight={"500"}
                borderRadius={"12px"}
                _hover={{ color: "black", bg: "white", borderColor: "black" }}
                transition={"all 500ms linear"}
                borderColor={"transparent"}
                border={"1px solid"}
                cursor={"pointer"}
              >
                Modals
              </Button>
            </ListItem>
          </UnorderedList>
          <Text as={"span"} display={["none", "unset"]}>
            <Button
              fontFamily={"fontRoboto"}
              lineHeight={"100%"}
              ms={["0", "0", "24px"]}
              bg={"black"}
              px={"24px"}
              py={"12px"}
              color={"white"}
              fontSize={"20px"}
              fontWeight={"500"}
              borderRadius={"12px"}
              _hover={{ color: "black", bg: "white", borderColor: "black" }}
              transition={"all 500ms linear"}
              borderColor={"transparent"}
              border={"1px solid"}
              cursor={"pointer"}
            >
              Modals
            </Button>
          </Text>
          <Text
            as={"span"}
            transition={"all 500ms linear"}
            zIndex={11}
            onClick={() => setShow(!show)}
            display={["unset", "unset", "none"]}
            ms={["0", "24px"]}
          >
            {" "}
            {show ? (
              <RxCross2 fontSize={"30px"} />
            ) : (
              <RxHamburgerMenu fontSize={"30px"} />
            )}
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default Hero;
