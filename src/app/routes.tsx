import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Raffle from "./pages/Raffle";
import Admin from "./pages/Admin";
import Help from "./pages/Help";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "blog", Component: Blog },
      { path: "raffle", Component: Raffle },
      { path: "admin", Component: Admin },
      { path: "help", Component: Help },
    ],
  },
]);
