import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  const login = (token, role, userId, email) => {
    setToken(token);
    setRole(role);
    setUserId(userId);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);
    localStorage.setItem("email", email);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    setUserId(null);
    setEmail(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        role,
        userId,
        email,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
