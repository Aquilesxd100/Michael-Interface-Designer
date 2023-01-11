import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home';
import { temaPadrao } from "./temas/temaPadrao";
import { ThemeProvider } from "@mui/material"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={temaPadrao}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);