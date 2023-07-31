import { createRoot } from "react-dom/client";
import App from "app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "features/ThemeSwitcher";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
