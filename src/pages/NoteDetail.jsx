import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const note = storedNotes.find(note => note.id === id);
    setNote(note);
  }, [id]);

  if (!note) {
    return <Text>Note not found.</Text>;
  }

  return (
    <Box p={4}>
      <Heading mb={4}>{note.title}</Heading>
      <Text mb={4}>{note.tags}</Text>
      <Text>{note.reminder}</Text>
    </Box>
  );
};

export default NoteDetail;