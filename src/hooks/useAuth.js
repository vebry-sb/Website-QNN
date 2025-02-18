import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    // Lakukan login API call
    // Misalnya menggunakan fetch untuk memanggil API login
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (data.success) {
      setUser(data.user);
      localStorage.setItem('auth', JSON.stringify(data.user));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth');
  };

  return { user, login, logout };
};

export default useAuth;
