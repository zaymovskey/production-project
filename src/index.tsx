import { createRoot } from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);