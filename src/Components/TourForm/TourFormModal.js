import React, { useState } from 'react';
import BookForm from './BookForm';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { blue } from '@material-ui/core/colors';

export default function TourFormModal(props) {

   
    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(true);
    };

    const [name, setName] = React.useState('Composed TextField');
  
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
    
    const {title,children, openPopup, setOpenPopup} = props;

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props}  />;
      });

    return(
        <Dialog open={openPopup} TransitionComponent={Transition}>
            <DialogTitle >
                <div>Booking Form</div>
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            In case that our available Tours doesnt suit your needs , we can create a custom Tour for what you want in the best available price. 
            Provide us with the facilities you'd like for your vacations and we ll come back at you with the best price.
          </DialogContentText>
              <BookForm />
            </DialogContent>
        </Dialog>
    )

}