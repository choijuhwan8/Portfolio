// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
// import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div className="App bg-primary w-full overflow-hidden relative">
      <header className="fixed top-0 w-full z-50 bg-black sm:px-16 flex justify-center items-center transition-all duration-300 ease-in-out">
        <div className="xl:max-w-[1280px] w-full">
          <NavBar />
        </div>
      </header>
      <Banner />
	  <div className="h-screen">
		djfsakljdsfa
	  </div>
		  <div className="h-screen">
		djfsakljdsfa
	  </div>
    </div>
  );
}

export default App;
