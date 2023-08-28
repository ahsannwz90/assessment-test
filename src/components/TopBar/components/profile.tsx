import { Avatar, Box, Grid, Typography } from "@mui/material";
import ProfileIcon from "../../../assets/images/profile-picture.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Profile() {
    return (
        <Grid container className="pointer">
            <Box mr={'10px'}>
            <Avatar alt="John " src={ProfileIcon} />
            </Box>
            <Grid>
                <Typography
                fontSize={'16px'}
                fontWeight={'700'}
                color={'#16161D'}
                >John</Typography>
                <Typography
                fontSize={'12px'}
                fontWeight={'400'}
                color={'#6E6E91'}
                >john@mail.com</Typography>
            </Grid>
            <Box>
                <KeyboardArrowDownIcon width={'40px'} height={'40px'} />
            </Box>
        </Grid>
    )
}

export default Profile;