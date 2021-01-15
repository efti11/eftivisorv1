import React, { useState } from 'react';
import {Asdfwrapper,SiteSearch,H1,Input,SearchBoxForm} from './searchBoxCSS';
import Backdrop from '../Backdrop/Backdrop';
import {BackdropContext} from '../../App';
const SearchBox = () => {
  const {backdrop, setBackdrop} = React.useContext(BackdropContext)
// const [showSe,setSearch] =  useState(false);

// const  loadSearchOverlay = () => {
//     setSearch(!showSe);
//     }

     const [focus, setFocus] = useState(false);
     const [active ,setModal] =useState(false);
     const [query, setQuery] = useState('');

     React.useEffect(()=>console.log(backdrop), [backdrop]);
     const handleInput = (e) => {
       setFocus(!focus);
       setModal(!active);
       setBackdrop(!backdrop);
       
     };
     const handleInputChange =(e)=>setQuery(e.target.value);
     
    
return(
  <Asdfwrapper>
    <SiteSearch>
      <H1>Chania the City where Summer happens!</H1>
    <SearchBoxForm active={active}>

    <Input onChange={handleInputChange} onClick={handleInput}/>
    <Backdrop show={active} clicked={handleInput}/>
    </SearchBoxForm>
    </SiteSearch>
    </Asdfwrapper>
    )

}



export default SearchBox;