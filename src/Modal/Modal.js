import React from 'react';
import Backdrop from '../Components/Backdrop/Backdrop';
import {} from 'ModalCSS'

const ModalOverlay = props => {
    return (
        <div>
            <form onSubmit={ props.onSubmit? props.onSubmit: (event) => event.preventDefault()}>
                
                <div className={`Modal_content ${props.ContentClass}`}>
                    {props.children}
                </div>
            </form>
        </div>
    );
};

const Modal = (props) => {

<ModalOverlay {...props} />

}