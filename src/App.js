import { Route, Routes } from "react-router-dom";
import './styles/App.css';
import Demo from './containers/Demo';
import Home from './containers/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/demo' element={<Demo />} />
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </>
  );
}

export default App;