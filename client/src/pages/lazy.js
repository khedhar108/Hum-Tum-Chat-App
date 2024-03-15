import { lazy } from "react";

const Home = lazy(() => import("./Home.jsx"));
const Chat = lazy(() => import("./Chat.jsx"));
const Login = lazy(() => import("./Login.jsx"));
const Groups = lazy(() => import("./Groups.jsx"));

export { Home, Chat, Login, Groups };
