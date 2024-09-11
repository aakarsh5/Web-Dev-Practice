import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext"; // Ensure correct path
import Header from "./components/header"; // Ensure correct import

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <div className="w-full h-screen flex flex-col">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Login />} /> {/* Fallback route */}
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
