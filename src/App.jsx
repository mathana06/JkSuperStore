import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Particles from './components/Particles';
import './App.css';

function App() {
  return (
    <Router>
      <Particles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
