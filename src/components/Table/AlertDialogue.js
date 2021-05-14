import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Flex,
  useDisclosure,
  AlertDialogCloseButton,
  useToast
} from "@chakra-ui/react";
import {useDispatch} from 'react-redux';
import {deleteUserData} from '../UserDataForrm/store/action';

const AlertDialogBox = ({phone}) => {

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const toast = useToast();

  const deleteUserHandler=()=>{
    dispatch(deleteUserData(phone));
    toast({
      title: "User Deleted",
      description: "The user is deleted from the table",
      status: "success",
      duration: 3000,
      position:'bottom-right',
      isClosable: true,
    })
  }

  return (
    <>
      <Button
        onClick={onOpen}
        size="sm" colorScheme="red"
      >
        DELETE
      </Button>
      <Flex justify="center" alignItems="center">
        <AlertDialog
          motionPreset="scale"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Delete user?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to delet this user? This will be
              deleted permanently.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" ml={3} onClick={deleteUserHandler}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Flex>
    </>
  );
};

export default AlertDialogBox;