import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import MainComponent from "./components/MainComponent";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MainComponent />
      </AuthProvider>
    </ThemeProvider>
  );
}
