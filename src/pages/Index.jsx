import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Hawaiian Notes</Text>
        <Text>Keep track of your thoughts and ideas with a touch of aloha!</Text>
        <Link to="/create">
          <Button colorScheme="teal">Create a New Note</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;