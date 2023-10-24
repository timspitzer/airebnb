import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Discover, Login, MapSearch, Rooms, Users } from "../pages/pages.js";
import { FALLBACK, LOGIN, MAP_SEARCH, ROOMS, ROOT, USERS } from "./paths.js";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<Discover />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={ROOMS} element={<Rooms />} />
        <Route path={USERS} element={<Users />} />
        <Route path={MAP_SEARCH} element={<MapSearch />} />
        <Route path={FALLBACK} element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
