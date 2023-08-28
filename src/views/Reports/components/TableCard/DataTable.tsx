import {
    DataGridPremium,
    GridToolbarContainer,
    GridColDef,
    GridRowsProp,
} from '@mui/x-data-grid-premium';

const rows: GridRowsProp = [
    {
        Timestamp: new Date(2020, 8, 12),
        sitename: 'Head of Human Resources',
        DailyTime: 10,
        TrackingMode: 10,
        AssetsTracking: 12,
        SnowStow:10,
        id: 0,
    },
    {
        Timestamp: new Date(2017, 3, 4),
        sitename: 'Head of Sales',
        DailyTime: 9,
        TrackingMode: 10,
        WindStow: 30,
        SnowStow:1,
        id: 1,
    },
    {
        Timestamp: new Date(2020, 11, 20),
        sitename: 'Sales Person',
        DailyTime: 10,
        AssetsTracking: 12,
        WindStow: 30,
        SnowStow:45,
        id: 2,
    },
    {
        Timestamp: new Date(2020, 10, 14),
        sitename: 'Sales Person',
        DailyTime: 10,
        TrackingMode: 10,
        WindStow: 30,
        SnowStow:54,
        id: 3,
    },
    {
        Timestamp: new Date(2017, 10, 29),
        sitename: 'Sales Person',
        DailyTime: 100,
        TrackingMode: 10,
        WindStow: 60,
        AssetsTracking: 10,
        SnowStow:31,
        id: 4,
    },
    {
        Timestamp: new Date(2020, 7, 21),
        sitename: 'Sales Person',
        DailyTime: 20,
        AssetsTracking: 110,
        SnowStow:7,
        id: 5,
    },
    {
        Timestamp: new Date(2020, 7, 20),
        sitename: 'Sales Person',
        DailyTime: 660,
        SnowStow:1,
        id: 6,
    },
    {
        Timestamp: new Date(2019, 6, 28),
        sitename: 'Sales Person',
        DailyTime: 20,
        SnowStow:2,
        id: 7,
    },
    {
        Timestamp: new Date(2016, 3, 14),
        sitename: 'Head of Engineering',
        DailyTime: 80,
        id: 8,
    },
    {
        Timestamp: new Date(2016, 5, 17),
        sitename: 'Tech lead front',
        DailyTime: 90,
        id: 9,
    },
    {
        Timestamp: new Date(2019, 11, 7),
        sitename: 'Front-end developer',
        DailyTime: 990,
        id: 10,
    },
    {
        Timestamp: new Date(2021, 7, 1),
        sitename: 'Tech lead devops',
        DailyTime: 650,
        id: 11,
    },
    {
        Timestamp: new Date(2017, 0, 12),
        sitename: 'Tech lead back',
        DailyTime: 110,
        id: 12,
    },
    {
        Timestamp: new Date(2019, 2, 22),
        sitename: 'Back-end developer',
        DailyTime: 100,
        id: 13,
    },
    {
        Timestamp: new Date(2018, 4, 19),
        sitename: 'Back-end developer',
        DailyTime: 101,
        id: 14,
    },
];

const columns: GridColDef[] = [
    {
        field: 'Timestamp',
        headerName: 'Time stamp',
        width: 150
    },
    {
        headerName: 'Site Name',
        field: 'sitename',
        width: 250,
    },
    {
        headerName: 'Daily Time (%)',
        field: 'DailyTime',
        width: 150,
    },
    {
        headerName: 'Tracking Mode (%)',
        field: 'TrackingMode',
        width: 150,
    },
    {
        headerName: 'Assets Tracking (%)',
        field: 'AssetsTracking',
        width: 150,
    },
    {
        headerName: 'Wind Stow',
        field: 'WindStow',
        width: 150,
    },
    {
        headerName: 'Snow Stow (%)',
        field: 'SnowStow',
        width: 150,
    },
    {
        headerName: 'Manual Modes (%)',
        field: 'SnowStow',
        width: 150,
    }
];



function CustomToolbar() {
    return (
        <GridToolbarContainer />
    );
}

function DataTable() {
    return (
        <div style={{ height: 476, width: '100%' }}>
            <DataGridPremium
                columns={columns}
                rows={rows}
                slots={{
                    toolbar: CustomToolbar,
                }}
                pagination
                autoPageSize
            />
        </div>
    );
}
export default DataTable;