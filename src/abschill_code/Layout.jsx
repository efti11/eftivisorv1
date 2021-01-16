import React from 'react';

//helmet lets us set header stuff
import { Helmet } from 'react-helmet';
import NavbarMain from './NavbarMain.jsx';
import './main.css';
import { BrowserRouter as Router } from 'react-router-dom';
//higher order component that uses router and context outside the root
const Layout = (props) => {
    return (
        <div className="App" >
            <Helmet><title>{props.pageTitle ?? "Default Title"}</title></Helmet>
            {/**We set up our routes as children defined in App, navbar right above that with linnks, and our change input for global state comes with us everywhere */}
            <Router>
                <NavbarMain />
                {props.children}
                <div className="queryContainer">
                    {/* take the onchange method directly from the props to set the global state without drilling */}
                    <input id="location" type="text" onChange={(e) => props.setQuery(e.target.value)} placeholder="Where to?" />
                    <h3>{props.query ? props.query : "Enter a Location"}</h3>
                </div>


            </Router>

        </div >
    )

}


export default Layout;