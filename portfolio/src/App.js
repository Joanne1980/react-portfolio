import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "../src/Pages/Contact";
import Home from "../src/Pages/Home";
import Projects from "../src/Pages/Projects";
import Header from "../src/components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          {
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/:id" element={<Projects />} />
            </Routes>
          }
          ;
        </div>
      </Router>

      <main className="text-gray-400 bg-gray-900 body-font">
        <Home />
      </main>
    </>
  );
}
export default App;
