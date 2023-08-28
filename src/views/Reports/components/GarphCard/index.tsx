import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, ButtonGroup, Card, CardContent, FormControl, Grid, Menu, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import BarGraph from './BarGraph';

function GraphCard() {
    const [value, setValue] = React.useState('1');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [phaseFilter, setPhaseFilter] = React.useState('');

    const tabHandleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const projectHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const projectHandleClose = () => {
        setAnchorEl(null);
    };

    const phaseHandleChange = (event: SelectChangeEvent) => {
        setPhaseFilter(event.target.value);
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} mx={'30px'}>
                            <TabList onChange={tabHandleChange} aria-label="lab API tabs example">
                                <Tab label="UPTIME" value="1" />
                                <Tab label="MOTOR CURRENT" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Grid justifyContent={'space-between'} display={'flex'}>
                                <Grid display={'flex'} alignItems={'center'} flexDirection={'row'}>
                                    <Button
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={projectHandleClick}
                                        style={{ color: '#585874', fontSize: '16px', fontWeight:700 }}
                                    >
                                        Project
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
                                        <MenuItem onClick={projectHandleClose}>Project 1</MenuItem>
                                        <MenuItem onClick={projectHandleClose}>Project 2</MenuItem>
                                        <MenuItem onClick={projectHandleClose}>Project 3</MenuItem>
                                    </Menu>
                                    <Typography>Phase</Typography>
                                    <FormControl sx={{ m: 1, minWidth: 60 }}>
                                        <Select
                                            value={phaseFilter}
                                            onChange={phaseHandleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value={''}>All</MenuItem>
                                            <MenuItem value={2}>Phase 1</MenuItem>
                                            <MenuItem value={3}>Phase 2</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Typography>Project AC</Typography>
                                    <FormControl sx={{ m: 1, minWidth: 60 }}>
                                        <Select
                                            value={phaseFilter}
                                            onChange={phaseHandleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            
                                            <MenuItem value={''}>All</MenuItem>
                                            <MenuItem value={2}>Project AC 1</MenuItem>
                                            <MenuItem value={3}>Project AC 2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid display={'flex'} flexDirection={'row'}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateRangePicker']}>
                                            <DateRangePicker localeText={{ start: 'Start', end: 'End' }} />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <ButtonGroup className='group-btn' variant="outlined" aria-label="outlined button group">
                                        <Button>Days</Button>
                                        <Button>Months</Button>
                                        <Button>Years</Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                            <Grid display={'flex'} justifyContent={'center'}>
                                <BarGraph />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                    </TabContext>
                </Box>
            </CardContent>
        </Card>
    )
}

export default GraphCard;