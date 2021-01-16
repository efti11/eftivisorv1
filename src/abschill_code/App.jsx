import React, { useState } from 'react';

import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import { Route, Switch } from 'react-router-dom';
const App = () => {
    const [query, setQuery] = useState(null);
    const [title, setTitle] = useState("Set a Title");
    //this can also be a json file to dynamically render your routes from an array of props
    return (
        <Layout pageTitle={title} query={query} setQuery={setQuery}>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/hotels">
                    Hotels in {query}
                </Route>
                <Route path="/top">
                    Top Rated in {query}
                </Route>
                <Route path="/reviews">
                    Reviews in {query}
                </Route>
                <Route path="/login">
                    Login
                </Route>
                <Route path="/forum">
                    Forum
                </Route>
                <Route path="/more">
                    More in {query}
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
