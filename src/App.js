import Hero from './components/index/hero';
import Navbar from './components/navigation/navbar';
import './styles/App.css';

function App() {
  return (
    <>
    <div className="relative h-full">
      <Navbar/>
      <Hero/>
    </div>
    </>
  );
}

export default App;