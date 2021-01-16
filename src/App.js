import React, { useState } from 'react';
import './App.css';
import Header from './Components/NavBar/Header'
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import SearchBox from './Components/SearchBox/SearchBox';
import TourForm from './Components/TourForm/TourForm';
import TravelAdvice from './Components/TravelAdvice/TravelAdvice';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TourComponent from './pages/Tours';

export const BackdropContext = React.createContext(false);
const App = () => {
  const [backdrop, setBackdrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const backdropMemo = React.useMemo(() => ({ backdrop, setBackdrop }), [backdrop, setBackdrop])
  const toggle = () => {
    setIsOpen(!isOpen);
    setBackdrop(!backdrop);
  }
  return (
    <div className="App">
      <Router>
        <BackdropContext.Provider value={backdropMemo}>
          <Header toggle={toggle} />
          <Switch>
            <Route path="/" exact>
              <SearchBox />
              <TourForm />
              <TravelAdvice />
              <SideDrawer isOpen={isOpen} toggle={toggle} />
            </Route>
            <Route path="/search">
              <Backdrop show={isOpen} clicked={toggle} />
              <SearchBox />
            </Route>
          </Switch>
        </BackdropContext.Provider>
      </Router>

    </div>
  );
}

export default App;
