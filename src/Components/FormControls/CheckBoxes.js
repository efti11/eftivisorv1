import React from 'react';
import Paper from '@material-ui/core/Paper';
import { FormControl, FormControlLabel } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


const Checkboxes = (props) => {
    
    const {name,label,value,onChange ,items} = props;

return(
    <FormControl>              
    

    <FormGroup column="true" 
        name={name}
        value={value}
        onChange={onChange}
        >
        
    {items.map(
        (item, index)=>(
            <FormControlLabel
            value={item.id}
            control= {<Checkbox />}
            label={item.title}
        />
        )
        )

    }
    </FormGroup>
    
    
    </FormControl>
)
}

export default Checkboxes;