import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
