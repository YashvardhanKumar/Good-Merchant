import './App.css';
import React from 'react'
import Homepage from '../../Pages/Homepage/Homepage';
import Categories from '../Categories/Categories';
import { Route, Switch } from 'react-router-dom'
// import ImageSearch from '../ImageSearching/imagesearch';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/home'>
          <Categories/>
        </Route>
      </Switch>
    </div>
    // <Categories/>
  );
}

export default App;
