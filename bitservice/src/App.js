import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import IPpage from './Pages/AddIP';
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
        <Route path="/ip" component={IPpage}/>
              
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
