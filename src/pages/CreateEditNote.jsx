import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateEditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [reminder, setReminder] = useState("");

  useEffect(() => {
    if (id) {
      const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      const note = storedNotes.find(note => note.id === id);
      if (note) {
        setTitle(note.title);
        setTags(note.tags);
        setReminder(note.reminder);
      }
    }
  }, [id]);

  const handleSave = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = { id: id || Date.now().toString(), title, tags, reminder };
    const updatedNotes = id ? storedNotes.map(note => note.id === id ? newNote : note) : [...storedNotes, newNote];
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    toast({
      title: "Note saved.",
      description: "Your note has been saved successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Box p={4}>
      <FormControl mb={4}>
        <FormLabel>Title</FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Tags</FormLabel>
        <Input value={tags} onChange={(e) => setTags(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Reminder</FormLabel>
        <Input type="datetime-local" value={reminder} onChange={(e) => setReminder(e.target.value)} />
      </FormControl>
      <Button colorScheme="teal" onClick={handleSave}>Save Note</Button>
    </Box>
  );
};

export default CreateEditNote;