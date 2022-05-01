import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { selectCurrentUser } from '../containers/Auth/authSlice';
import SignInScreen from '../containers/Auth/SignInScreen';
import SignUpScreen from '../containers/Auth/SignUpScreen';
import Counter from '../containers/Counter';
import TestMUI from '../TestMUI';

function Dashboard() {
  const location = useLocation();

  return (
    <div>
      Dashboard Page
      <Link to="/dashboard">Dashboard</Link>
      <hr />
      <Link to="/dashboard1">Dashboard1</Link>
      <hr />
      <Link to="/dashboard2">Dashboard2</Link>
      <hr />
      <Link to="/login" state={{ from: location }}>
        Login
      </Link>
      <Outlet />
    </div>
  );
}

function NotFound() {
  return <div>NotFound Page</div>;
}

function ForgotPassword() {
  return <div>ForgotPassword Page</div>;
}

function RequireAuth() {
  const currentUser = useSelector(selectCurrentUser);
  console.log('currentUser', currentUser);
  const location = useLocation();
  console.log('location', location);

  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<TestMUI />} />
      </Route>
      <Route path="/counter" element={<Counter />} />
      <Route path="/login" element={<SignInScreen />} />
      <Route path="/create-account" element={<SignUpScreen />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route element={<RequireAuth />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard1" element={<Dashboard />} />
        <Route path="/dashboard2" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
