import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import AddIPpage from './Pages/AddIP';
import GetIPpage from './Pages/GetIP';
import UpdateIPpage from './Pages/UpdateIP';
import DeleteIPpage from './Pages/DeleteIP';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
      <div className="page">  
      <main className="main-content">
      <Navigation />

      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/addIP" component={AddIPpage}/>
        <Route path="/getIP" component={GetIPpage}/>
        <Route path="/updateIP" component={UpdateIPpage}/>
        <Route path="/deleteIP" component={DeleteIPpage}/>
              
      </Switch>
      </main>
      <div className="align-footer">
        <Footer />
      </div>
      </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
