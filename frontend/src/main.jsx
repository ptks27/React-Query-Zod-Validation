import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ต้อง import BrowserRouter ด้วย
import ZodUi from "./ZodUi.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/zod" element={<ZodUi />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
