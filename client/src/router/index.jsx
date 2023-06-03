import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Discover,
  Login,
  Profile,
  Room,
  Wishlists,
} from "../components/index.js";

export const Router = () => {
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
};
