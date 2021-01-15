import React, {useState, useEffect} from 'react';
import {useForm, Form} from '../FormControls/UseForm'
import Input from '../FormControls/Input';
import CheckBoxes from '../FormControls/CheckBoxes';
import Select from '../FormControls/Select';


import { Grid , makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControl from '@material-ui/core/FormControl';

import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';

/* 
const CarItems = [
    VecicleType = [
        {id:'pool', title:'Pool'},
        {id:'pool', title:'Pool'},
        {id:'pool', title:'Pool'},
        {id:'pool', title:'Pool'},    
    ],

    Extras = [
        {id:'pool', title:'Pool'},
        {id:'pool', title:'Pool'},
        {id:'pool', title:'Pool'},
        {id:'pool', title:'Pool'},
    ],

    Pickup=[
        {id:'pool', title:'Pool'},
        {id:'pool', title:'Pool'},
        {id:'pool', title:'Pool'},
        {id:'pool', title:'Pool'},
    ]
       
    
] */


const FacilitiesItems = [
    {id:'pool', title:'Pool'},
    {id:'pool', title:'Pool'},
    {id:'pool', title:'Pool'},
    {id:'pool', title:'Pool'},
    {id:'pool', title:'Pool'},
    {id:'pool', title:'Pool'},
]

const initialValues = {
    name:'',
    email:'',
    bedroom:'',
    people:'',
    facilities:'',
    checkin:new Date(),
    checkout:new Date(),
    budget:''
}

const BookForm = () => {

    const  {
        values,
        setValues,
        handleInputChange
    } = useForm(initialValues)


    
    return(
            
           <Form>
             
            <Input 
             label="name"
             name="fullname"
             value={values.name}
             onChange={handleInputChange}
            
            />
            
            <Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                /> 

                <Typography id="range-slider" gutterBottom>
                 
                Budget from to Facilities that you want included to your acommodation place
                
                </Typography>
            

                <Typography id="range-slider" gutterBottom>
                 Facilities that you want included to your acommodation place
                </Typography>

                <Select 
                 name="bedroom"
                 label="People:"
                 vaue={values.bedroom}
                 onChange={handleInputChange}
                
                />

                <Select 
                 name="numers"
                 label="Numbers:"
                 vaue={values.bedroom}
                 onChange={handleInputChange}
                
                />

             <Grid item xs={6}>

                 <CheckBoxes 
                 name="FacilitiesItems"
                 value={values.facilities}
                 onChange={handleInputChange}
                 items={FacilitiesItems} />
             </Grid>
              
            
             
             </Form>
        
    )
}

export default BookForm;