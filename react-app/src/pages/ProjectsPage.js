import React, { useState } from 'react';

import alpha from '../assets/img/alphaimpactprototype.png';
import zenbuddy from '../assets/img/zenbuddyprototype.png';
import shortcircuit from '../assets/img/shortcircuitprototype.png';
import logo from '../assets/img/LOGO.ai';


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [description, setDescription] = useState('');
	
  const handleImageClick = (img, desc) => {
    setSelectedImg(img);
    setDescription(desc);
    setIsOpen(true);
  };	
  
  const handleClose = () => {
	  setIsOpen(false);
  }
  
  return ( 
  <div>
    <section id="projects" className="mt-32 p-4 mx-4">
		<div className="grid grid-cols-3 grid-rows-3 gap-4">
			<div className="h-96 overflow-hidden border-2 border-orange-500 cursor-pointer"  onClick={()=> handleImageClick(alpha, 'Meow')}>
          		<img src={alpha} alt='project1' className="w-full h-full object-cover object-top" />
			</div>		
			<div className="col-start-3 row-start-1 h-96 overflow-hidden border-2 border-orange-500 cursor-pointer" onClick={()=> handleImageClick(zenbuddy, 'Meow')}>
				<img src={zenbuddy} alt='project2' className="w-full h-full object-cover" />
			</div>
			<div className="col-span-2 col-start-2 row-start-2 bg-slate-500 flex justify-center items-center">3 comming soon</div>
			<div className="row-span-2 col-start-1 row-start-2 bg-slate-500 flex justify-center items-center">4 comming soon</div>
			<div className="col-start-2 row-start-3 bg-slate-500 flex justify-center items-center">5 comming soon<img src={logo} alt='logo' /></div>
			
			<div className="col-start-2 row-start-1 h-96 overflow-hidden border-2 border-white cursor-pointer" onClick={()=> handleImageClick(shortcircuit, 'Meow')}>
				<img src={shortcircuit} alt='project3' className="w-full h-full object-cover object-top" />
			</div>
			<div className="col-start-3 row-start-3 bg-slate-500 flex justify-center items-center">7 comming soon</div>
		</div>
       </section>
	   {isOpen && (
        <div className="fixed inset-0 z-300 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-h-screen overflow-auto">
            <img 
              src={selectedImg} 
              alt="Full view" 
              className="w-full max-h-[80vh] object-cover" 
            />
            <p className="mt-2 text-black">{description}</p>
            <button onClick={handleClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
  </div>
 )
};

export default HomePage;
