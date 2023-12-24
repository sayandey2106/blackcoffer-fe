import React, { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Select,
  Divider,
  Text,
  Flex,
  Heading,
  Avatar,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  MdDashboard,
  MdAssignment,
  MdSettings,
  MdExitToApp,
  MdPeople,
  MdCalendarToday,
  MdInsertDriveFile,
  MdAnalytics,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={onOpen}
        position="fixed"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        zIndex={1}
        colorScheme="teal"
        variant="outline"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("gray.100", "gray.800")}
          color={useColorModeValue("gray.800", "white")}
        >
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color="teal.500"
            display="flex"
            alignItems="center"
          >
            <SettingsIcon mr={2} /> Blackcoffer
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="lg" mb={2} fontWeight="bold">
              Menu
            </Text>
            <Divider
              mb={4}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />

            <List spacing={3}>
              {/* ... Your list items */}
              <ListItem cursor="pointer">
              <NavLink to="/dashboard">
                <ListIcon as={MdDashboard} fontSize="xl" />
                Dashboard
                </NavLink>
              </ListItem>
              <ListItem cursor="pointer">
                <NavLink to="/intensity">

                <ListIcon as={MdAssignment} fontSize="xl" />
                Intensity Chart
                </NavLink>
              </ListItem>
              <ListItem cursor="pointer">
              <NavLink to="/Region">
                <ListIcon as={MdPeople} fontSize="xl" />
                Region Distribution
                </NavLink>
              </ListItem>
              <ListItem cursor="pointer">
              <NavLink to="/topic">
                <ListIcon as={MdCalendarToday} fontSize="xl" />
                Topics Chart
                </NavLink>
              </ListItem>
              <ListItem cursor="pointer">
              <NavLink to="/relevance">
                <ListIcon as={MdInsertDriveFile} fontSize="xl" />
                Relevance Chart
                </NavLink>
              </ListItem>
              <ListItem cursor="pointer">
              <NavLink to="/Likelihood">
                <ListIcon as={MdAnalytics} fontSize="xl" />
              
Likelihood Chart
</NavLink>
              </ListItem>
              {/* <ListItem cursor="pointer">
                <ListIcon as={MdSettings} fontSize="xl" />
                Settings
              </ListItem>
              <ListItem cursor="pointer" onClick={onClose}>
                <ListIcon as={MdExitToApp} fontSize="xl" />
                Logout
              </ListItem> */}
            </List>

            <Flex alignItems="center" mt="140%">
              <Avatar
                size="lg"
                src="https://avatars.githubusercontent.com/u/110231091?s=400&u=dfefa66e38cbdd84674e1a9f55737a51827b8725&v=4"
                mr={4}
              />
              <Box>
                <Heading size="md">Ritesh Kr. Shukla</Heading>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                 Country Chart
                </Text>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default AdminDashboard;
