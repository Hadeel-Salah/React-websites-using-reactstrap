import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom'
import { About} from './pages/About';
import  Home from './pages/Home';
import { Services} from './pages/Services';
import { Careers } from './pages/Careers';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/careers" element={<Careers/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
