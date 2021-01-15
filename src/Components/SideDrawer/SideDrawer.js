import React, { useState } from 'react';
import {SideBarUL,SideBarLI ,CloseMenuIcon} from './SideDrawerCSS';
import {SiteNav} from '../NavBar/HeaderCSS';
import SideDrawerItems from './SideDrawerItems';


const SideDrawer = ({isOpen ,toggle}) => {

    return  (
    <div>
      
       <SiteNav isOpen={isOpen} onClick={toggle}>
         <CloseMenuIcon onClick={toggle}></CloseMenuIcon>
     
      
      </SiteNav>

      
      
      
      </div>
    )
   
}

export default SideDrawer;