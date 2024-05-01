import logo from "./logo.svg";
import "./App.css";
import { TabComponent } from "./Tabs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Footer } from "./Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <h1>DBC Machine INC</h1>
      <TabComponent />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
