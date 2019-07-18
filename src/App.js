import React from 'react';
import './App.css';
import Private from './VIew/Private/index';
import MainPage from './VIew/MainPage/index';
import AboutUs from './VIew/AboutUs/AboutUs';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/private" component={Private}/>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/" component={MainPage}/>
        </Switch>
    </div>
  );
}

export default App;
