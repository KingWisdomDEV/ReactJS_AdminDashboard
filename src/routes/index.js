import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from '../containers/Counter';
import TestMUI from '../TestMUI';

function NotFound() {
  return <div>NotFound Page</div>;
}

function Login() {
  return <div>Login Page</div>;
}

function ForgotPassword() {
  return <div>ForgotPassword Page</div>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<TestMUI />} />
      </Route>
      <Route path="/counter" element={<Counter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
