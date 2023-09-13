import { ColorModContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Home from "./pages/home/home";


function App() {
  const [theme, colorMode] = useMode();
  
  return (

    <ColorModContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Home />
        </div>
      </ThemeProvider>
    </ColorModContext.Provider>
  );
}

export default App;
