// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
// import { Footer } from './components/Footer';
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
      <div className="App bg-black w-full h-screen overflow-hidden relative">
        <header className="fixed top-5 mt-4 w-full z-50 bg-transparent transition-all duration-300 ease-in-out">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
		    <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
		<footer className="fixed bottom-0 w-full bg-gray-800 text-white py-4 text-center">
        </footer>  
      </div>
    </Router>
  );
}

export default App;
