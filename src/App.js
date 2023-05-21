import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/Navbar'
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      </>
    </div>
  );
}

export default App;
