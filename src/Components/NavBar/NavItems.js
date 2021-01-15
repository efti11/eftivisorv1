import React from 'react';
import {SiteNav,UtilityNavUL,UtilityNavLI,MainNavUL,MainNavLI} from './NavItemsCSS';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import img from '../../Assets/Img/tour-guide.svg';
import Tours from '../../pages/Tours';


const NavItems = () => {

    return  (
    <>
        <UtilityNavUL>
            <UtilityNavLI>Write a Review</UtilityNavLI>
            <UtilityNavLI>asdf</UtilityNavLI>
            <UtilityNavLI>Login</UtilityNavLI>
        </UtilityNavUL>
        <MainNavUL>
           
          
            <MainNavLI Component={Tours} to="/Tours">Our Tours</MainNavLI>
            
        
       
            <MainNavLI to="/pswles">Restaurants</MainNavLI>
            <MainNavLI to="/Tours">Night Life</MainNavLI>
            <MainNavLI>Shopping</MainNavLI>
            <MainNavLI>Sightseeing</MainNavLI>
            <MainNavLI>asdf</MainNavLI>
        </MainNavUL>
        </>
    )
   
}

export default NavItems;

