import { Grid } from "@mui/material";
import Logo from "../../assets/images/Logo.svg"
import SearchFrom from "./components/searchForm";
import Profile from "./components/profile";


function TopBar() {
    return (
        <Grid container spacing={2}
            sx={{
                background: '#fff',
                padding: '20px'
            }} 
            className="border-bottom sticky-top-bar"
            >
            <Grid xs={3} md={2} mt={'10px'} alignItems={'flex-start'}>
                <img src={Logo} alt="logo" />
            </Grid>
            <Grid xs={9} md={10} container justifyContent={'space-between'}>
                <Grid pl={'36px'}>
                    <SearchFrom />
                </Grid>
                <Grid>
                <Profile />
                </Grid>
            </Grid>
        </Grid>
    )
}
export default TopBar;