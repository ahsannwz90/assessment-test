
import { Grid, Typography } from "@mui/material";
import GraphCard from "./components/GarphCard";
import TableCard from "./components/TableCard";


function Reports() {
    return (
        <Grid>
            <Typography
                variant="h3"
                component="h3"
                fontWeight={'700'}
                mb={'30px'}
            >
                Reports
            </Typography>
            <Grid mb={'80px'}>
                <GraphCard />
            </Grid>
            <Grid mb={'80px'}>
                <TableCard />
            </Grid>
        </Grid>
    )
}


export default Reports;