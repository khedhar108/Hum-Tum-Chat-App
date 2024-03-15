import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes/routes.jsx";






function App() {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

