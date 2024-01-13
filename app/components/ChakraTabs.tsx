import {
  Box,
  Container,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

const ChakraTabs = () => {
  return (
    <>
      <Box py={'48px'} id="tabs">
        <Container maxW={"1140px"} mx={"auto"} px={{ base: "12px", xl: "0" }}>
            <Box  w={"100%"} textAlign={'center'} maxW={'800px'} mx={'auto'}>
          <Tabs variant="soft-rounded" colorScheme="green" mx="auto">
            <TabList w={'100%'} display={'flex'} justifyContent={'center'} mb={'24px'}>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel >
              <Image w={'30%'} mx={'auto'} src="./assets/png/css.png" alt="css" />
              </TabPanel>
              <TabPanel>
              <Image w={'30%'} mx={'auto'} src="./next.svg" alt="next" />
              </TabPanel>
              <TabPanel>
              <Image w={'30%'} mx={'auto'} src="./vercel.svg" alt="vercel" />
              </TabPanel>
            </TabPanels>
          </Tabs>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ChakraTabs;
