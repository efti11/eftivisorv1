import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NavbarMain from './NavbarMain.jsx';
import './main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export const BackdropContext = React.createContext(false);





//higher order component that uses router and context outside the root
const Layout = (props) => {

    const queryRef = React.useRef(null);
    return (
        <div className="App" >
            <Helmet><title>{props.pageTitle ?? "Default Title"}</title></Helmet>
            <Router>
                <NavbarMain />
                {props.children}
                <div className="queryContainer">
                    <input id="location" type="text" onChange={(e) => props.setQuery(e.target.value)} placeholder="Where to?" />
                    <h3>{props.query ? props.query : "Enter a Location"}</h3>
                </div>


            </Router>

        </div >
    )

}


export default Layout;