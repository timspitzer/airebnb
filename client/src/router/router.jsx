import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FALLBACK, ROOMS, ROOT, USERS } from "./paths.js";

import { Discover } from "../components/pages/discover/discover.jsx";
import { Rooms } from "../components/pages/rooms/rooms.jsx";
import { Users } from "../components/pages/users/users.jsx";

export const Router = () => {
  return (
    <BrowserRouter basename="/airebnb/">
      {/* <BrowserRouter> */}
      <Routes>
        <Route path={ROOT} element={<Discover />} />
        <Route path={ROOMS} element={<Rooms />} />
        <Route path={USERS} element={<Users />} />
        <Route path={FALLBACK} element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
