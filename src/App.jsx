import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* 404 Not Found */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
