import React, { createContext, useState, useEffect } from "react";
import { meApi, logoutApi } from "../api/index";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;

    meApi(token)
      .then((u) => {
        setUser(u);
        setIsLoggedIn(true);
      })
      .catch(() => {
        localStorage.removeItem("auth_token");
        setIsLoggedIn(false);
        setUser(null);
      });
  }, []);

  const login = (token) => {
    if (token) localStorage.setItem("auth_token", token);
    setIsLoggedIn(true);
    // ممكن بعدين تنادي meApi هنا لو عايزة تجيبي بيانات الـ user فورًا
  };

  const logout = async () => {
    const token = localStorage.getItem("auth_token");
    try {
      if (token) await logoutApi(token);
    } catch {}
    localStorage.removeItem("auth_token");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
