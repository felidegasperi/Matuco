import Login from "./components/login/Login";
import Home from "./components/home/Home";
import PageNotFound from "./components/security/pageNotFound/PageNotFound";

import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./components/services/themeContext/Theme.context";

function App() {
  const { theme } = useContext(ThemeContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <div className={`${theme === "dark" && "dark-theme"}`}>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
