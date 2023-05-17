import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import {
  DiscoverPage,
  LoginPage,
  RoomPage,
  ProfilePage,
  WishlistsPage,
  NotFoundPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rooms/:roomId" element={<RoomPage />} />
        <Route path="/users/:userId" element={<ProfilePage />} />
        <Route path="/wishlists" element={<WishlistsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
