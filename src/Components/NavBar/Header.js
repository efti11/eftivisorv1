import React , {useState} from 'react';
import {SiteNav, Header , Logo ,NavMenuIcon, SearchIcon,InnerContainer} from './HeaderCSS';
import NavItems from '../NavBar/NavItems';
import SearchBox from '../SearchBox/SearchBox';
const NavBar = ({toggle}) => {

    return  (
   
    <Header>
        <InnerContainer>
            <NavMenuIcon onClick={toggle}></NavMenuIcon>
            <Logo>EftiVisor</Logo>
            <SearchIcon></SearchIcon>
            <SiteNav>
               <NavItems />
               </SiteNav>
        </InnerContainer>
      </Header> 
      
     
    )
   
}

export default NavBar;

