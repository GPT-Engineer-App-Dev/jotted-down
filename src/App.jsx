import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import CreateEditNote from "./pages/CreateEditNote.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create" element={<CreateEditNote />} />
        <Route exact path="/edit/:id" element={<CreateEditNote />} />
        <Route exact path="/note/:id" element={<NoteDetail />} />
      </Routes>
    </Router>
  );
}

export default App;