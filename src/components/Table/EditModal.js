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
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast
} from "@chakra-ui/react";
import {editUserData} from '../UserDataForrm/store/action';
import {useDispatch,useSelector} from 'react-redux';

const EditModal = ({idx}) => {

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData.userData.find((user,index)=>index==idx));


  const [user, setUser] = React.useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    dob: userData.dob,
    city: userData.city,
    district: userData.district,
    province: userData.province,
    country: userData.country,
  });

  const { name, email, phone, dob, city, district, province, country } = user;

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editUserData(user,idx));
    toast({
      title: "User Updated",
      description: "The user is updated in the table",
      status: "info",
      duration: 3000,
      position:'bottom-right',
      isClosable: true,
    })
  };
  return (
    <>
      <Button onClick={onOpen} size="sm" colorScheme="blue">
        EDIT
      </Button>

      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader color="teal">EDIT</ModalHeader>
          </Center>

          <ModalCloseButton />
          <ModalBody>
            <Box
              bgColor="#eee"
              w="100%"
              border="1px solid teal"
              p={3}
              borderRadius={20}
            >
              <form onSubmit={formSubmitHandler}>
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    borderRadius={8}
                    border="none"
                    bgColor="#fff"
                    mb={2}
                    type="text"
                    size="sm"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => inputChangeHandler(e)}
                  />

                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    bgColor="#fff"
                    border="none"
                    mb={2}
                    type="email"
                    size="sm"
                    id="email"
                    borderRadius={8}
                    name="email"
                    value={email}
                    onChange={(e) => inputChangeHandler(e)}
                  />

                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    bgColor="#fff"
                    border="none"
                    mb={2}
                    type="number"
                    size="sm"
                    id="phone"
                    borderRadius={8}
                    name="phone"
                    value={phone}
                    onChange={(e) => inputChangeHandler(e)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="dob">Date of birth</FormLabel>
                  <Input
                    bgColor="#fff"
                    border="none"
                    mb={2}
                    type="date"
                    size="sm"
                    id="dob"
                    borderRadius={8}
                    name="dob"
                    value={dob}
                    onChange={(e) => inputChangeHandler(e)}
                  />

                  <FormLabel htmlFor="city">City</FormLabel>
                  <Input
                    bgColor="#fff"
                    border="none"
                    mb={2}
                    type="text"
                    size="sm"
                    id="city"
                    name="City"
                    borderRadius={8}
                    name="city"
                    value={city}
                    onChange={(e) => inputChangeHandler(e)}
                  />

                  <FormLabel htmlFor="district">District</FormLabel>
                  <Input
                    bgColor="#fff"
                    border="none"
                    mb={2}
                    type="text"
                    size="sm"
                    id="district"
                    borderRadius={8}
                    name="district"
                    value={district}
                    onChange={(e) => inputChangeHandler(e)}
                  />

                  <FormLabel htmlFor="province">Province</FormLabel>
                  <Select
                    name="province"
                    border="none"
                    mb={2}
                    bgColor="#fff"
                    borderRadius={8}
                    size="sm"
                    value={province}
                    id="province"
                    placeholder="Select your province"
                    onChange={(e) => inputChangeHandler(e)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </Select>

                  <FormLabel htmlFor="country">Country</FormLabel>
                  <Input
                    bgColor="#fff"
                    border="none"
                    mb={4}
                    type="text"
                    size="sm"
                    id="country"
                    borderRadius={8}
                    name="country"
                    value={country}
                    onChange={(e) => inputChangeHandler(e)}
                  />
                </FormControl>

                <Center>
                  <Button type="submit" colorScheme="teal" size="sm" w="200px">
                    UPDATE
                  </Button>
                </Center>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
