import { Routes, Route } from "react-router-dom";

import { SignUp } from "../Pages/SignUp";
import { SignIn } from "../Pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}
