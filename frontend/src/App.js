import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './forgot_pass';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot_pass" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
