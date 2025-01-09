import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import './index.css';
import { ProtectedRoute } from './auth/ProtectedRoute';
import LoginForm from './admin/admin_login';
import Dashboard from './main/dashboard';
import AdminRegister from './admin/admin_register';

const App = () => {
  return (
    // AuthProvider MUST wrap everything
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route path="/register" element={<AdminRegister />} />
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;