import logo from './logo.svg';
import './App.css';
import { TabComponent } from './Tabs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <TabComponent/>
    </ThemeProvider>
  );
}

export default App;
