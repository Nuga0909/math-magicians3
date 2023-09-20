import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navbar from './components/Nav';
import HomePage from './components/Home';
import './calculator.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
