import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../pages";

export default function index() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
