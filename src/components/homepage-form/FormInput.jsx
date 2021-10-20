import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import './form-inputs.styles.css'


const FormInput = () => {
    
    return (
        <form>
            <div className="user-details">
                <TextField className='input-one' fullWidth id="outlined-search" label=" Name* " type="search" />
                <TextField fullWidth id="outlined-search" label="  Email* " type="search" />
            </div>


            <FormControl sx={{ m: 0, minWidth: '100%' }}>
                <InputLabel id="demo-simple-select-helper-label">Your Inquirey About</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Age"
                fullWidth
                >
                <MenuItem value="">
                    <em>Your Inquirey About?</em>
                </MenuItem>
                <MenuItem>General Information Request</MenuItem>
                <MenuItem >Patner Relations</MenuItem>
                <MenuItem>Software Licensing</MenuItem>
                </Select>
            </FormControl>

            <div className="textarea">
                <TextField
                fullWidth
            id="outlined-multiline-static"
            label="Your Comment"
            multiline
            rows={5}
            defaultValue="Hi Blacklist Dept,"
            />
            </div>

            <Button variant='contained'>Get Free Consultation</Button>
        </form>
    )
}

export default FormInput
