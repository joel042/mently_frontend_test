import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MentorsDashboard } from "./screens/MentorsDashboard";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MentorsDashboard />
  </StrictMode>,
);
