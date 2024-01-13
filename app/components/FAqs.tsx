import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
} from "@chakra-ui/react";
import React from "react";

const FAqs = () => {
  return (
    <>
      <Box py={"48px"} id="accordian">
        <Container maxW={"1140px"} mx={"auto"} px={{ base: "12px", xl: "0" }}>
          <Accordion allowToggle maxW={"800px"} mx={"auto"}>
            <AccordionItem mb={'24px'} border={'1px solid #ddd'} borderRadius={'8px'}>
              <h2>
                <AccordionButton border={'none'} _hover={{bg:'none'}}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontFamily={"fontPoppins"}
                    fontSize={"20px"}
                    fontWeight={500}
                  >
                    Lorem ipsum dolor sit amet consectetur ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                fontFamily={"fontRubik"}
                fontSize={"18px"}
                fontWeight={"400"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={'1px solid #ddd'} borderRadius={'8px'} mb={'24px'}>
              <h2>
                <AccordionButton _hover={{bg:'none'}}>
                  <Box as="span" flex="1" textAlign="left"  fontFamily={"fontPoppins"}
                    fontSize={"20px"}
                    fontWeight={500}>
                    asperiores vero voluptatem, nesciunt in facere.
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontFamily={"fontRubik"}
                fontSize={"18px"}
                fontWeight={"400"}>
                labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border={'1px solid #ddd'} borderRadius={'8px'}>
              <h2>
                <AccordionButton _hover={{bg:'none'}}>
                  <Box as="span" flex="1" textAlign="left"  fontFamily={"fontPoppins"}
                    fontSize={"20px"}
                    fontWeight={500}>
                    illum nesciunt voluptatem facilis incidunt mollitia 
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontFamily={"fontRubik"}
                fontSize={"18px"}
                fontWeight={"400"}>
                labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>
    </>
  );
};

export default FAqs;
