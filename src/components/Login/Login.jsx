import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <Box
      bg="linear-gradient(to bottom right, purple, blue)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        borderColor="white" 
        textAlign="center"
      >
        <h1 style={{ color: 'white' }}>Just press Login Button!!!</h1>
        <form>
          <FormControl>
            <FormLabel style={{ color: 'white' }}>Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              borderColor="white" 
              disabled
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel style={{ color: 'white' }}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin" 
              borderColor="white"
              disabled
            />
          </FormControl>
          <NavLink to="/dashboard">

          <Button colorScheme="green" mt={6} w="100%" >
            Login
          </Button>
          </NavLink>
          {/* AlertDialog */}
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent bg="purple.800" color="white">
                <AlertDialogHeader>Welcome Admin !!!</AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
