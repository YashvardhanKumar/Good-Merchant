import './App.light.css';
import './App.dark.css';
import React, { useState } from 'react'
import Homepage from '../../Pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom'
import { CategoriesPage } from '../../Pages/CategoriesPage/CategoriesPage';
import Navbar from '../navbar/navbar';
import Background from '../background/background';
import Popup from '../PopUp/popup'
// import ImageSearch from '../ImageSearching/imagesearch';
function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => setToggleMenu(!toggleMenu)
  return (
    <div>

      <Navbar toggleNav={toggleNav} />
      <Background />
      {(toggleMenu) && <Popup className="popup" toggleMenu={toggleNav} />}

      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/home'>
          <CategoriesPage />
        </Route>
      </Switch>
    </div>
    // <Categories/>
  );
}

export default App;
