import Navbar from './components/navigation/navbar';
import GetContact from './pages/contact';
import { BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Hero from './components/index/hero';
import Solutions from './pages/solutions';
import Footer from './components/footer/footer';
import Methodology from './components/methodology/methodology';

function App() {
  return (
    <>
      <div className="relative h-full">
        <BrowserRouter>
          <Navbar />
          <Hero />
          <Solutions />
          <Methodology />
          <GetContact />
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;