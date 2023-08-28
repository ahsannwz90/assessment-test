import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";

function SearchFrom() {
    return (
        <form noValidate autoComplete="off">
            <FormControl variant="outlined" className='search-field' size="small">
                <OutlinedInput
                    id="input-with-icon-adornment"
                    placeholder="Search for file, folder, etc..."
                    startAdornment={
                        <InputAdornment position="start" >
                            <SearchIcon sx={{ color: "#A8A8BD" }} />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </form>
    )
}
export default SearchFrom;