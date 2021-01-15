import React from 'react';
import {SideBarUL,SideBarLI} from './SideDrawerCSS';
import {Link} from 'react-router-dom';



const SideDrawerItems= () => {

    return  (
    <>
        <SideBarUL>
            <SideBarLI><Link to="/review">Write a Review</Link></SideBarLI>
            <SideBarLI>asdf</SideBarLI>
            <SideBarLI>Login</SideBarLI>
        </SideBarUL>
        
        </>
    )
   
}

export default SideDrawerItems;