import { TabComponent } from "./Tabs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Footer } from "./frame/Footer";
import { Header } from "./frame/Header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <TabComponent />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
