import { Box, Container } from "@chakra-ui/react";
import React from "react";

const RowCol = () => {
  return (
    <>
      <Box py={"48px"} id="grid">
        <Container
          maxW={"1140px"}
          mx={"auto"}
          px={["12px", "12px", "12px", "12px", "12px", "0"]}
        >
          <Box
            as="div"
            display={"grid"}
            gridTemplateColumns={{
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={"40px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              as="div"
              fontFamily={"fontRoboto"}
              fontWeight={500}
              fontSize={"18px"}
              lineHeight={"120%"}
              textAlign={"center"}
            >
              ciatis autem aliquid quos deleniti possimus obcaecati assumenda
              hic qui nam, voluptatibus id cupiditate.
            </Box>
            <Box
              as="div"
              fontFamily={"fontRoboto"}
              fontWeight={500}
              fontSize={"18px"}
              lineHeight={"120%"}
              textAlign={"center"}
            >
              ciatis autem aliquid quos deleniti possimus obcaecati assumenda
              hic qui nam, voluptatibus id cupiditate.
            </Box>
            <Box
              as="div"
              fontFamily={"fontRoboto"}
              fontWeight={500}
              fontSize={"18px"}
              lineHeight={"120%"}
              textAlign={"center"}
            >
              ciatis autem aliquid quos deleniti possimus obcaecati assumenda
              hic qui nam, voluptatibus id cupiditate.
            </Box>
            <Box
              as="div"
              fontFamily={"fontRoboto"}
              fontWeight={500}
              fontSize={"18px"}
              lineHeight={"120%"}
              textAlign={"center"}
            >
              ciatis autem aliquid quos deleniti possimus obcaecati assumenda
              hic qui nam, voluptatibus id cupiditate.
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RowCol;
