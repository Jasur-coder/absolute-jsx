import React from "react";
import Login from "./pages/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ])
  return <RouterProvider router={routes}/>;

}

export default App