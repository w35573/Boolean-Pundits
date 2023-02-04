import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Cancel from "../pages/Cancel";
import Success from "../pages/Success";
import Sponsor from "../pages/Sponsor";
import Volunteer from "../pages/Volunteer";


const Routers = () => {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home' />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/login" exact element={!user ? <Login /> : <Navigate to="/home" />} />
      <Route path="/signup" exact element={!user ? <Signup /> : <Navigate to="/home" />} />
      <Route path="/profile" exact element={user ? <Profile /> : <Navigate to="/home" />} />

      <Route path="/cancel" element={<Cancel />} />
      <Route path="/success" element={<Success />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
