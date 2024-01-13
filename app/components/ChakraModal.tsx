import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

const ChakraModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} py={'48px'} id="modals">
        <Button onClick={onOpen}>Open Modal</Button>
<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg={'black'}/>
          <ModalContent my={'auto'} mx={'auto'}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton color={'red'}/>
            <ModalBody>
             <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus inventore laudantium quasi repudiandae reprehenderit exercitationem accusantium odit placeat neque eaque, natus, recusandae, a repellat non? Temporibus commodi deserunt exercitationem veritatis.</h2>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button variant="ghost">Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
      </Box>
    </>
  );
};

export default ChakraModal;
