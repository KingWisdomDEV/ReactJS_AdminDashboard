import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { authActions, selectCurrentUser } from '../containers/Auth/authSlice';
import SignInScreen from '../containers/Auth/SignInScreen';
import SignUpScreen from '../containers/Auth/SignUpScreen';
import Counter from '../containers/Counter';
import TestMUI from '../TestMUI';

function Dashboard() {
  const location = useLocation();
  const dispatch = useDispatch();

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
      <Button onClick={() => dispatch(authActions.logout())}>Logout</Button>
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

function UnRequireAuth(props) {
  const { currentUser } = props;

  // when user navigate to unRequireAuth page, then check currentUser exist or not
  // If exist redirect user to /dashboard page
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}

function RequireAuth(props) {
  const { currentUser, location } = props;

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
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  return (
    <Routes>
      <Route element={<RequireAuth currentUser={currentUser} location={location} />}>
        <Route path="/">
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard1" element={<Dashboard />} />
        <Route path="/dashboard2" element={<Dashboard />} />
      </Route>
      <Route element={<UnRequireAuth currentUser={currentUser} />}>
        <Route path="/login" element={<SignInScreen />} />
        <Route path="/create-account" element={<SignUpScreen />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Route>
      <Route path="/test" element={<TestMUI />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
