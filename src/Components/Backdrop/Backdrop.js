import styled from 'styled-components';
import React from 'react';

const BackdropCSS = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:0;
    background-color: rgba(255,255, 255, 0.45); 
`;

const Backdrop = ({show, clicked}) => (
     show?<BackdropCSS onClick={clicked}></BackdropCSS>:null
);



export default Backdrop;
