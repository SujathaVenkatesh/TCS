import React from 'react';
import Navbar from './components/Nav';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import About from './components/pages/About';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
           {/* <Route path='/Who we are' component={About} />  */}
          {/* //  <Route path='/products' component={Products} /> */}
        {/* <Route path='/sign-up' component={SignUp} />  */} */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
   
