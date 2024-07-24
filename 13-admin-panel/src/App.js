import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Stats, Upgrades, Posts, Error } from "./pages";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
          <Route path="/upgrades" element={<Upgrades />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
