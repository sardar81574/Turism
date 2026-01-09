
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";

// Components
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import Explore from "./pages/Explore";

export default function App() {


 const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Total time = typing duration (text length * speed) + 1 sec extra
    const typingDuration = "Welcome to your must-see places in Madhya Pradesh".length * 60;

    const totalTime = typingDuration + 1000; // +1 second

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, totalTime);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <Loading />;

  return (
    <Router>
      <Navbar />
      <div className="page">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/info/:id" element={<Info />} />
          <Route path="/Explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}