import { createRoot } from "react-dom/client";
import "./index.css";
import { route } from "./routes/root";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={route} />
);
