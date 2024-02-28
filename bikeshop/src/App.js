import './App.css';
import About from './Pages/About';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
