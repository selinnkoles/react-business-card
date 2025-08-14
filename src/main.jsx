import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Info from "./Info.jsx";
import About from "./About.jsx";
import Interests from "./Interests.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main>
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  </StrictMode>
);
