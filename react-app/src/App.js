// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
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
      <div className="App bg-primary w-full overflow-hidden relative">
        <header className="fixed top-0 w-full z-50 bg-transparent transition-all duration-300 ease-in-out">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
		    <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
