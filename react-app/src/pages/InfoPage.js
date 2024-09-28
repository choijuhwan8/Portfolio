import React from 'react';

const InfoPage = () => (
 <div>
    <section id="projects" className="h-full mt-48 p-4 mx-4">
	 	<div class="grid grid-cols-4 gap-4">
  	 		<div className='min-h-20'>
				<h2>Education</h2>
				<section>
					ST. Andrew's Junior College (Science) <br></br>
					<div className='text-slate-400'>Jan 2019 - Nov 2020</div>
				</section>
				<section>
					Singapore Management University
					<div className='text-slate-400'>Bachelor of Information Systems</div>
					<div className='text-slate-400'>Aug 2021 - Apr. 2026</div>
				</section>
			</div>
			<div className='min-h-20'>
				<h2>Experiences</h2>
				
				<section>
					Republic of Korea Army
					<div className='text-slate-400'>3rd Armed Division</div>
					<div className='text-slate-400'>Cheorwon County, Gangwon, South Korea</div>
					<div className='text-slate-400'>Nov 2022 - May 2024</div>
				</section>
			</div>  	 		
			<div className='min-h-20'>
				<h2>Internship</h2>
				<section>
					Alpha Impact <br></br>
					<div className='text-slate-400'>software engineer intern (Frontend)</div>
					<div className='text-slate-400'>Feb 2023 - Jul 2023</div>
				</section>
				
			</div>  	 		
			<div className='min-h-20'>
				<h2>Skills</h2>
				<section>
					languages:
					<div className='text-slate-400'>Fluent English & Korean</div>
					web development:
					<div className='text-slate-400'>HTML, tailwind, bootstrap, js, ts, Vue, React</div>
					datanase:
					<div className='text-slate-400'>Mysql, Firebase</div>
					OTHER TOOLS:
					<div className='text-slate-400'>Figma, GitHub</div>
				</section>
				
			</div> 			
  			

		</div>
       </section>
  </div>
);

export default InfoPage;
