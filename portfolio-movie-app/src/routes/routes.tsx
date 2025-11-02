/**
 * routes
 * routes.tsx
**/

import Home from "../pages/Home/Home";
import Detail from "./Detail";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/movie/:id", element: <Detail /> },
]