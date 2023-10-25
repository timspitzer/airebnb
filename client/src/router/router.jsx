import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Discover, Rooms, Users } from "../pages/pages.js";
import { ROOT, ROOMS, USERS, FALLBACK } from "./paths.js";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<Discover />} />
        <Route path={ROOMS} element={<Rooms />} />
        <Route path={USERS} element={<Users />} />
        <Route path={FALLBACK} element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
