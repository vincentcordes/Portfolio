import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

import Apps from './components/Apps/Apps';
import Code from './components/Code/Code';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import './components/FontAwesome/fontawesome';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="Content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/Apps">
                <Apps/>
              </Route>
              <Route path="/Code">
                <Code/>
              </Route>
              <Route path="/Blogs">
                <Blogs/>
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
              <Route path="/About">
                <About/>
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
