import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Button,
  Box,
  Text,
  IconButton,
} from "@chakra-ui/react";
import {ArrowDownIcon, ArrowUpIcon} from "@chakra-ui/icons";
import AlertDialogBox from "./AlertDialogue";
import EditModal from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import {sortDescending, sortAscending} from '../UserDataForrm/store/action';
import {Link} from 'react-router-dom';

const TableData = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userData);

  const sortAscendingByName=()=>{
    dispatch(sortAscending());
  };

  const sortDescendingByName=()=>{
  dispatch(sortDescending());
  };

  return (
    <Box>
    <Table
      size="md"
      border="1px solid teal"
      variant="striped"
      colorScheme="teal"
      margin="60px auto"
      w="98%"
    >
      <Thead border="1px solid teal">
        <Tr>
          <Th>
            <HStack>
            <Text>Name</Text>
            <IconButton icon={<ArrowDownIcon/>} onClick={sortAscendingByName}/>
            <IconButton icon={<ArrowUpIcon/>} onClick={sortDescendingByName}/>
            </HStack>
          </Th>

          <Th>EMAIL</Th>
          <Th>PHONE</Th>
          <Th>DOB</Th>
          <Th>CITY</Th>
          <Th>DISTRICT</Th>
          <Th>PROVINCE</Th>
          <Th>COUNTRY</Th>
          <Th>CHANGE DATA</Th>
        </Tr>
      </Thead>
      {userData.map((user, idx) => (
        <Tbody key={user.phone} border="1px solid teal">
          <Tr>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
            <Td>{user.dob}</Td>
            <Td>{user.city}</Td>
            <Td>{user.district}</Td>
            <Td>{user.province}</Td>
            <Td>{user.country}</Td>
            <Td>
              <HStack spacing="20px">
                <AlertDialogBox phone={user.phone} />
                <EditModal idx={idx} />
              </HStack>
            </Td>
          </Tr>
        </Tbody>
      ))}
    </Table>
    <Link to="/userprofiles" >
      <Button marginX="20px" size="md" colorScheme="teal">PRROFILES</Button>
    </Link>
    </Box>
  );
};

export default TableData;
