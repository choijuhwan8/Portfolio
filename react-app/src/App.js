import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [description, setDescription] = useState('');
  // console.log(isOpen, 'fhdsakjf')
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Cleanup function to reset the overflow when the component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
	
  const handleImageClick = (img, desc) => {
    setSelectedImg(img);
    setDescription(desc);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className="App bg-black w-full min-h-screen flex flex-col">
        <header className="fixed top-3 mt-4 w-full z-50 bg-transparent transition-all duration-300 ease-in-out">
			<NavBar isOpen={isOpen}/>
        </header>
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/projects" element={<ProjectsPage 
				isOpen={isOpen} 
                onImageClick={handleImageClick} 
                onClose={handleClose} 
                selectedImg={selectedImg} 
                description={description} 
			/>} />
          </Routes>
        </main>
        <footer className="bg-black">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
