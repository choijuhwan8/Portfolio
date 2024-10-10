import React from 'react';
// import alpha from '../assets/img/alphaimpactprototype.png';
import zenbuddy from '../assets/img/zenbuddyprototype.png';
import alpha from '../assets/img/alphass.png';
// import shortcircuit from '../assets/img/shortcircuitprototype.png';
// import logo from '../assets/img/LOGO.ai';

const HomePage = ({ isOpen, onImageClick, onClose, selectedImg, description }) => {
  return ( 
    <div>
      <section id="projects" className="mt-32 p-4 mx-4">
			<div className="grid grid-cols-3 gap-4">
			<div className='flex flex-col'>
				<div className="h-96 overflow-hidden cursor-pointer" 
				    onClick={() => onImageClick(alpha, '')}>
					<img src={alpha} alt='project1' className="w-full h-full" />
			  	</div>
				<div className='text-right'>Alpha impact internship</div>   
		    </div>
			  
			<div className='flex flex-col'>
			    <div className="h-96 flex flex-col overflow-hidden cursor-pointer" 
				    onClick={() => onImageClick(zenbuddy, '')}>
					<img src={zenbuddy} alt='project2' className="!w-full h-full" />
			    </div>
				<div className='text-right'>Project Zenbuddy</div>   
			</div>

			  <div className="h-96 bg-slate-500 flex justify-center items-center">3 coming soon</div>
			  <div className="h-96 bg-slate-500 flex justify-center items-center">4 coming soon</div>
			  <div className="h-96 bg-slate-500 flex justify-center items-center">5 coming soon</div>
			  <div className="h-96 bg-slate-500 flex justify-center items-center">6 coming soon</div>
			  <div className="h-96 bg-slate-500 flex justify-center items-center">7 coming soon</div>
			  <div className="h-96 bg-slate-500 flex justify-center items-center">8 coming soon</div>
			  <div className="h-96 bg-slate-500 flex justify-center items-center">9 coming soon</div>

			</div>
		  </section>
      {isOpen && (
        <div className="fixed inset-0 !z-300 flex items-center justify-center bg-black bg-opacity-50">
		  <div className="bg-white p-4 z-400 rounded shadow-lg max-h-screen overflow-auto">
			<img 
			  src={selectedImg} 
			  alt="Full view" 
			  className="w-full z-400 max-h-[80vh] object-cover" 
			/>
			<p className="mt-2 text-black">{description}</p>
			<div className="flex justify-end mt-4">
			  <button onClick={onClose} className="bg-black text-white px-4 py-2 rounded">Close</button>
			</div>
		  </div>
		</div>

      )}
    </div>
  );
};

export default HomePage;
