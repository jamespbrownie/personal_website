import './App.css';
import { Link } from "react-router-dom"
import About from './Components/About';

function App() {
  return (
    <div>
      <nav>
      <Link to="/about"> about </Link>
        <Link to="/github"> github </Link>
        <Link to="/resume"> resume </Link>
        <Link to="/projects"> projects </Link>
      </nav>
      <h1>James Brownie's Portfolio Website</h1>
    </div>
  );
}

export default App;
