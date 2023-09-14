import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { ColorModContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function ThemeProviderWrapper() {
  const [theme, colorMode] = useMode();

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ColorModContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </ColorModContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ThemeProviderWrapper />);
