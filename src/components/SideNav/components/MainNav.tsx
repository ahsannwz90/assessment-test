
import { Paper, MenuList, MenuItem, ListItemIcon, Typography, Link } from "@mui/material";

import GridViewIcon from '@mui/icons-material/GridView';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

function MainNav() {
    
    return (
        <Paper className="side-nav custom-scroll">
            <MenuList>
                <MenuItem className={window.location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
                    <Link href="/">
                    <ListItemIcon>
                        <GridViewIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Dashboard</Typography>
                    </Link>
                </MenuItem>
                <MenuItem className={window.location.pathname === '/logs' ? 'nav-item active' : 'nav-item'}>
                <Link href="/logs">
                    <ListItemIcon>
                        <CalendarTodayIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Logs</Typography>
                    </Link>
                </MenuItem>
                <MenuItem className={window.location.pathname === '/nc' ? 'nav-item active' : 'nav-item'}>
                <Link href="/nc">
                    <ListItemIcon>
                        <RoomOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">NC</Typography>
                    </Link>
                </MenuItem>
                <MenuItem className={window.location.pathname === '/firmware' ? 'nav-item active' : 'nav-item'}>
                <Link href="/firmware">
                    <ListItemIcon>
                        <MemoryOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Firmware</Typography>
                    </Link>
                </MenuItem>
                <MenuItem className={window.location.pathname === '/companies' ? 'nav-item active' : 'nav-item'}>
                <Link href="/companies">
                    <ListItemIcon>
                        <ApartmentOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Companies</Typography>
                    </Link>
                </MenuItem>
                <MenuItem className={window.location.pathname === '/omtasks' ? 'nav-item active' : 'nav-item'}>
                <Link href="/omtasks">
                    <ListItemIcon>
                        <InventoryOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">O&M Tasks</Typography>
                    </Link>
                </MenuItem>
                <MenuItem className={window.location.pathname === '/administrators' ? 'nav-item active' : 'nav-item'}>
                <Link href="/administrators">
                    <ListItemIcon>
                        <GroupAddOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Administrators</Typography>
                    </Link>
                </MenuItem>
                <MenuItem className={window.location.pathname === '/reports' ? 'nav-item active' : 'nav-item'}>
                <Link href="/reports">
                    <ListItemIcon>
                        <EqualizerOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Reports</Typography>
                    </Link>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}

export default MainNav