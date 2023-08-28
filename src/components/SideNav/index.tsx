import { Box, Grid } from "@mui/material";
import MainNav from "./components/MainNav";
import QRScan from "./components/QRScan";

function SideNav() {
    return (
        <Box className="side-nav-wrapper">
            <MainNav />
            <Grid justifyContent={'center'} display={'flex'}>
            <QRScan />
            </Grid>
        </Box>
        
    )
}

export default SideNav;