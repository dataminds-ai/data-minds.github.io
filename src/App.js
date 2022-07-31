import Home from './pages';
import Navbar from './components/navigation/navbar';
import Contact from './components/index/contact';
import { BrowserRouter, Outlet, Link as LinkRouter} from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import './styles/App.css';
import Hero from './components/index/hero';

function App() {
  return (
    <>
      <div className="relative h-full">
        <BrowserRouter>
          {/* <Home/> */}
          <Navbar/>
          <Hero/>
          <Contact />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;