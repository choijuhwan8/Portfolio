// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
// import { Banner } from './components/Banner';
// import { Skills } from './components/Skills';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
  <Router>
  <div className="App bg-black w-full min-h-screen flex flex-col">
    <header className="fixed top-3 mt-4 w-full z-50 bg-transparent transition-all duration-300 ease-in-out">
      <NavBar />
    </header>
    <main className="flex-grow pt-0"> {/* Add padding to avoid overlap with the fixed header */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </main>
    <footer className="bg-black"> {/* You can style the footer as needed */}
      <Footer />
    </footer>
  </div>
</Router>

  );
}

export default App;
