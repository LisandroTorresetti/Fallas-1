import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../domain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
])

function App() {
  return (
    <div style={{ maxWidth: "80%", margin: "auto", marginTop: "40px" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
