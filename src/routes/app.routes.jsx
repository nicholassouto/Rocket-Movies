import { Routes, Route } from "react-router-dom";

import { Profile } from "../Pages/Profile";
import { App } from "../Pages/App";
import { CreateMovie } from "../Pages/CreateMovie";
import { MoviePreview } from "../Pages/MoviePreview";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/CreateMovie" element={<CreateMovie />} />
      <Route path="/MoviePreview/:id" element={<MoviePreview />} />
    </Routes>
  );
}
