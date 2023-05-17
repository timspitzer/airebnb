import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Discover, Login, Room, Profile, Wishlists } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rooms/:roomId" element={<Room />} />
        <Route path="/users/:userId" element={<Profile />} />
        <Route path="/wishlists" element={<Wishlists />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
