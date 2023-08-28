import { Button, Card, CardContent, Grid, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";
import DataTable from "./DataTable";

function TableCard() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const projectHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };


    const projectHandleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Grid display={'flex'} alignItems={'center'} flexDirection={'row'} mx={'30px'}>
                                    <Button
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={projectHandleClick}
                                        style={{ color: '#585874', fontSize: '16px', fontWeight:700 }}
                                    >
                                        UPTIME
                                        <KeyboardArrowDownIcon width={'20px'} />
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={projectHandleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={projectHandleClose}>UPTIME 1</MenuItem>
                                        <MenuItem onClick={projectHandleClose}>UPTIME 2</MenuItem>
                                        <MenuItem onClick={projectHandleClose}>UPTIME 3</MenuItem>
                                    </Menu>
                                </Grid>
                                <Grid mt="20px" mx={'30px'}>
                                <DataTable />
                                </Grid>
            </CardContent>
        </Card>
    )
}
export default TableCard;