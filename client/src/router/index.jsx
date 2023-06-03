import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Discover,
  Login,
  MapSearch,
  Profile,
  Room,
  Wishlists,
} from "../components/index.js";
import {
  FALLBACK,
  LOGIN,
  MAP_SEARCH,
  ROOM,
  ROOT,
  USER,
  WISHLISTS,
} from "./paths.js";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<Discover />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={ROOM} element={<Room />} />
        <Route path={USER} element={<Profile />} />
        <Route path={WISHLISTS} element={<Wishlists />} />
        <Route path={MAP_SEARCH} element={<MapSearch />} />
        <Route path={FALLBACK} element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
