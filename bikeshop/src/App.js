import './App.css';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
