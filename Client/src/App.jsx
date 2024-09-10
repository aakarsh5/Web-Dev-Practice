import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext"; // Ensure correct path to AuthProvider
import Header from "./components/header"; // Ensure Header is correctly imported

function App() {
  const [count, setCount] = useState(0);

  // Define the routes inside the return statement
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <div className="w-full h-screen flex flex-col">
          {useRoutes([
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/home", element: <Home /> },
            { path: "*", element: <Login /> }, // Fallback route
          ])}
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
