import React from 'react';
import {Box, Text, HStack, Center} from '@chakra-ui/react';
import AlertDialogueBox from '../Table/AlertDialogue';
import EditModal from '../Table/EditModal';

const Profile = (props) => {
    const{name,email,phone,dob,city,district,province,country,idx} = props;

    return <Center>
            <Box marginY="10px" p="10px" w="50%" border="1px solid red" borderRadius="20px" bgColor="#eee">
           <HStack spacing="40px">
               <Text fontWeight="bold">Name :</Text>
               <Text>{name}</Text>
           </HStack>

           <HStack spacing="20px">
               <Text fontWeight="bold">Email :</Text>
               <Text>{email}</Text>
           </HStack>

           <HStack spacing="20px">
               <Text fontWeight="bold">Phone :</Text>
               <Text>{phone}</Text>
           </HStack>

           <HStack spacing="20px">
               <Text fontWeight="bold">DOB :</Text>
               <Text>{dob}</Text>
           </HStack>

           <HStack spacing="20px">
               <Text fontWeight="bold">City :</Text>
               <Text>{city}</Text>
           </HStack>

           <HStack spacing="20px">
               <Text fontWeight="bold">District :</Text>
               <Text>{district}</Text>
           </HStack>

           <HStack spacing="20px">
               <Text fontWeight="bold">Province :</Text>
               <Text>{province}</Text>
           </HStack>

           <HStack spacing="20px">
               <Text fontWeight="bold">Country :</Text>
               <Text>{country}</Text>
           </HStack>

            <Center>
           <HStack marginY="5px" spacing="40px">
                <AlertDialogueBox phone={phone} />
                <EditModal idx={idx}/>
           </HStack>
           </Center>
        </Box>  
        </Center>
}

export default Profile
