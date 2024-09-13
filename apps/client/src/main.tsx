import { createRoot } from "react-dom/client";
import "./index.css";
import { route } from "./routes/root";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * Crear instancia de cliente de react-query
 */
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={route} />
  </QueryClientProvider>
);
