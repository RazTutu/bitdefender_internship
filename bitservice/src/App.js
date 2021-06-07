import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import AddIPpage from './Pages/AddIP';
import GetIPpage from './Pages/GetIP';
import UpdateIPpage from './Pages/UpdateIP';
import DeleteIPpage from './Pages/DeleteIP';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/addIP" component={AddIPpage}/>
        <Route path="/getIP" component={GetIPpage}/>
        <Route path="/updateIP" component={UpdateIPpage}/>
        <Route path="/deleteIP" component={DeleteIPpage}/>
              
      </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
