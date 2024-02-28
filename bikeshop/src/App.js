import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Pages/Contact';
import Models from './Pages/Models';
import Team from './Pages/Team';
import TestimonialsPage from './Pages/TestimonialsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="models" element={<Models />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
