import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    console.log("Fetched notes:", storedNotes); // Debugging line
    setNotes(storedNotes);
  }, []);

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Your Notes</Heading>
      <VStack spacing={4} align="stretch">
        {notes.length === 0 ? (
          <Text>No notes available. Create a new note!</Text>
        ) : (
          notes.map(note => (
            <Box key={note.id} p={4} borderWidth="1px" borderRadius="lg">
              <Flex justifyContent="space-between">
                <Box>
                  <Heading size="md">{note.title}</Heading>
                  <Text>{note.tags}</Text>
                </Box>
                <Flex>
                  <Link to={`/edit/${note.id}`}>
                    <Button colorScheme="teal" mr={2}>Edit</Button>
                  </Link>
                  <Button colorScheme="red" onClick={() => deleteNote(note.id)}>Delete</Button>
                </Flex>
              </Flex>
            </Box>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default Home;