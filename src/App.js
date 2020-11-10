import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hexagon from './components/Hexagon';
import PreviewProjects from './components/PreviewProjects';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/">
            <Profile />
            <Technologies />
            <Hexagon />
            <PreviewProjects />
          </Route>
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
