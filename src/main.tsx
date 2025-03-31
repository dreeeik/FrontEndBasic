import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { Box } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "grey.300",
      }}
    >
      <Header />
      <App />
      <Footer />
    </Box>
  </StrictMode>
);
