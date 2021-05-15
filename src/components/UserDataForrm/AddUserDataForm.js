import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserData } from "./store/action";
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
} from "@chakra-ui/react";
import SimpleReactValidator from "simple-react-validator";

const AddUserDataForm = () => {
  const dispatch = useDispatch();

  const simpleValidator = React.useRef(new SimpleReactValidator());

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: "",
  });

  const { name, email, phone, dob, city, district, province, country } = user;

  const clearInputs = () => {
    setUser({
      name: "",
      email: "",
      phone: "",
      dob: "",
      city: "",
      district: "",
      province: "",
      country: "",
    });
  };

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addUserData(user));
    clearInputs();
  };

  return (
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
            onBlur={simpleValidator.current.showMessageFor("name")}
            onChange={(e) => inputChangeHandler(e)}
          />
          <Text color="red" mb="10px">
            {simpleValidator.current.message("name", name, "required")}
          </Text>

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
            onBlur={simpleValidator.current.showMessageFor("email")}
            onChange={(e) => inputChangeHandler(e)}
          />
          <Text color="red" mb="10px">
            {simpleValidator.current.message("email", email, "required|email")}
          </Text>

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
            onBlur={simpleValidator.current.showMessageFor("phone")}
            onChange={(e) => inputChangeHandler(e)}
          />
          <Text color="red" mb="10px">
            {simpleValidator.current.message(
              "phone",
              phone,
              "required|min:7|max:12"
            )}
          </Text>
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
          <Button
            disabled={!simpleValidator.current.allValid()}
            type="submit"
            colorScheme="teal"
            size="sm"
            w="200px"
          >
            SUBMIT
          </Button>
        </Center>
      </form>
    </Box>
  );
};

export default AddUserDataForm;
