import React from 'react';
import Navbar from './components/Nav';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contact from './components/pages/Contact';
import Signup from './components/pages/Signup';
// import Session from './components/session';
import AboutUs from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
           <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Contact' component={Contact} />
          {/* //  <Route path='/' component={Contact} /> */}
          <Route path='/Signup' component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
   
