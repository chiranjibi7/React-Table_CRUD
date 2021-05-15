import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Center,
  } from "@chakra-ui/react";
import AddUserDataForm from './AddUserDataForm';

const DrawerForm = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <Center>
        <Button mt="20px" w="150px" ref={btnRef} colorScheme="teal" onClick={onOpen}>
          ADD USER
        </Button>
    </Center>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center color="teal" fontWeight="bold" fontSize="large">
              ADD USER
              </Center>
            </DrawerHeader>

          <DrawerBody>
            <AddUserDataForm/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerForm;
