import './App.css';
import { Outlet, Link, Route, Routes } from 'react-router-dom'
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
      <nav>
      <Link to="/about"> about </Link>
        <Link to="/github"> github </Link>
        <Link to="/resume"> resume </Link>
        <Link to="/projects"> projects </Link>
        <a rel="linkedin" href="https://www.linkedin.com/in/james-brownie-600aa011a/"> linkedin </a>
      </nav>
      <h1>James Brownie's Portfolio Website</h1>
      <img src=""/>

      <div>
        <Routes>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
