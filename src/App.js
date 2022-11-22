import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Header from './components/Header';
import Services from './components/Services';
import Test from './components/Test';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Header/> */}
   <Navbar/>
      <Routes>
        <Route exact path="/" key="home" element={<Home />} />
        <Route exact path="/service" key="service" element={<Services />} />
        <Route exact path="/test" key="test" element={<Test />} />
        <Route exact path="/contact" key="contact" element={<Contact />} />
        <Route exact path="/about" key="about" element={<About />} />
        <Route exact path="/portfolio" key="portfolio" element={<Portfolio />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
