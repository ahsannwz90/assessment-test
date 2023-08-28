
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import Dashboard from './views/Dashboard';
import Reports from './views/Reports';
import Administrators from "./views/Administrators";
import Companies from "./views/Companies";
import Firmware from "./views/Firmware";
import Logs from "./views/Logs";
import NC from "./views/NC";
import OMTasks from "./views/OMTasks";

const Theme = createTheme({
  typography: {
    "fontFamily": `'Inter', sans-serif`,
  }
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={Theme}>
        <TopBar />
        <Grid container spacing={0}>
          <Grid item xs={3} md={2} className="sticky-side-nav">
            <SideNav />
          </Grid>
          <Grid item xs={9} md={10} pl={'36px'} pr={'30px'} pt={'20px'} ml={'auto'} mt={'80px'}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/logs" element={<Logs />} />
                <Route path="/nc" element={<NC />} />
                <Route path="/firmware" element={<Firmware />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/omtasks" element={<OMTasks />} />
                <Route path="/administrators" element={<Administrators />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>
            </BrowserRouter>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;