import { Home, Chat, Login, Groups } from "../pages/lazy";


const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/groups",
      element: <Groups />,
    },
  ]

  export{routes}