
import React from 'react';
import { FormControl, FormControlLabel , Select as MuiSelect } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const Select = (props) => {
    
    const {name,label,value,onChange,option} = props;

return(
    <FormControl  variant="outlined">
       <MuiSelect
       name={name}
       value={value}
       onChange={onChange} >
            <MenuItem value="">     
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </MuiSelect>
    </FormControl>
) 

}

export default Select;