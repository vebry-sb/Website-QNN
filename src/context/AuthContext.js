// context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// Custom Hook untuk akses autentikasi
export function useAuth() {
  return useContext(AuthContext);
}

// Provider untuk autentikasi
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Awalnya, user tidak ada (belum login)

  const login = (userData) => {
    setUser(userData); // Simulasikan login dengan menyimpan data pengguna
  };

  const logout = () => {
    setUser(null); // Logout dengan menghapus data pengguna
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
