import Category from '../../Pages/Category';

import './App.light.css';
import './App.dark.css';
import React, { useState } from 'react'
import Homepage from '../../Pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom'
import { CategoriesPage } from '../../Pages/CategoriesPage/CategoriesPage';
import Navbar from '../navbar/navbar';
import Background from '../background/background';
import Popup from '../PopUp/popup'
import LoginPage from '../../Pages/LoginPage/LoginPage';
import SignupPage from '../../Pages/SignupPage/SignupPage';
import SearchResults from '../../Pages/SearchResults/SearchResults';


// import ImageSearch from '../ImageSearching/imagesearch';


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const newColorScheme = e.matches ? true : false;
});


function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  var [isInput, setIsInput] = useState(false)
  const isInputTyped = () => setIsInput(true)
  const toggleNav = () => setToggleMenu(!toggleMenu)

  return (

    
    
    <div>

      <Navbar toggleNav={toggleNav}/>
      <Background />
      {(toggleMenu) && <Popup className="popup" toggleMenu={toggleNav} />}
      {(isInput)}
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/home'>
          <Category />
          {/* <CategoriesPage /> */}
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/signup'>
          <SignupPage />
        </Route>
        <Route exact path={'/search'}>
          <SearchResults/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
