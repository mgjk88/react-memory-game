import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App/App";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import "./globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "shop", element: <Shop />},
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart />},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
