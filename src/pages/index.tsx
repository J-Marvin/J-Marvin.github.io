
import Head from 'next/head';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import ProfilePic from '@/components/profilePic';
import NavBar from '@/components/navbar';
import Link from 'next/link';
import Introduction from '@/components/introduction';
import {ProjectProps, loadProjects} from '@/lib/projects.tsx';
import ProjectCard from '@/components/projectCard';
import { SkillProps, loadSkills } from '@/lib/skills';
import SkillCard from '@/components/skillCard';
import React from 'react';
import { Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface HomeProps {
	'projects': Array<ProjectProps>,
	'skills': Array<SkillProps>
}


export async function getStaticProps() {
	const projects = await loadProjects();
	const skills = await loadSkills();

	return {
		props: {
			projects,
			skills
		}
	}
}


// https://www.youtube.com/watch?v=k-Pi5ZMxHWY
// TODO:
// Add technical skills/passions?
// Add projects (Proudest of first)
// Fix socmed links
export default function HomePage({ projects, skills } : HomeProps) {

	const [showModal, setOpen] = React.useState(false);

	return (
		<>
			<div>
				<Head>
					<title>
						Marvin Lim
					</title>

					<meta name="description" content="Portfolio"/>
					{/* <link rel="icon" href="/favicon.ico" /> */}
					<link rel="icon" type="image/png" href="/favicon.png" />
				</Head>

				<main className="bg-white px-10">
					
					<NavBar setModal={setOpen}/>
					<section className="min-h-screen">	
						
						<ProfilePic />
						<Introduction />
						<div className="text-5xl flex justify-center gap-16 py-3">
							<a href="https://linkedin.com/in/janmarvinlim" target="_blank"><AiFillLinkedin /></a>
							<a href="https://github.com/J-Marvin" target="_blank"><AiFillGithub /></a>
						</div>
					</section>
					<section>
						<div>
							<h3 className="text-3xl py-1">Projects</h3>
							<p className='text-md py-2 px-10 leading-8 text-gray-800'>
								Throughout the different courses I have taken, I have developed multiple projects alone and in teams.
								Along the way, I have collaborated with amazing people to create applications I am proud of today!
							</p>
						</div>
						<div className="lg:flex gap-10">
							{projects.map( project => (
								<ProjectCard key={project.title} title={project.title} desc={project.desc} image={project.image} features={project.features} link={project.link}/>
							))}
						</div>
						
					</section>
					<section>
						<h3 className='text-3xl py-1'>Skills and Interests</h3>
						<p className='text-md py-2 px-10 leading-8 text-gray-800'>
							Over the course of my journey as a Computer Science student, I have delved in
							different fields of study such as <span>Natural Language Processing</span> and <span>Data Science</span>. 
						</p>

						<div className="lg:flex flex-row flex-wrap gap-10">
							{skills.map( skill => (
								<SkillCard key={skill.title} title={skill.title}image={skill.image} competencies={skill.competencies}/>
							))}
						</div>
					</section>
				</main>
				
			</div>
					
			<Transition.Root show={showModal} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={setOpen}>
					<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-50 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
						<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
								<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
									Attributions
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm text-gray-500">
										<ul>
											<li><a target='_blank' href="https://www.flaticon.com/free-icons/nlp" title="nlp icons">Nlp icons created by Freepik - Flaticon</a></li>
											<li><a target='_blank' href="https://www.flaticon.com/free-icons/server" title="server icons">Server icons created by RaftelDesign - Flaticon</a></li>
											<li><a target='_blank' href="https://www.flaticon.com/free-icons/app-development" title="app development icons">App development icons created by Freepik - Flaticon</a></li>
											<li><a target='_blank' href="https://www.flaticon.com/free-icons/game-development" title="game development icons">Game development icons created by juicy_fish - Flaticon</a></li>
											<li><a target='_blank' href="https://www.flaticon.com/free-icons/database" title="database icons">Database icons created by phatplus - Flaticon</a></li>
											<li><a target='_blank' href="https://www.flaticon.com/free-icons/programmer" title="programmer icons">Programmer icons created by Flat Icons - Flaticon</a></li>
										</ul>
										
									</p>
								</div>
								</div>
							</div>
							</div>
							<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
							<button
								type="button"
								className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
								onClick={() => setOpen(false)}
							>
								Close
							</button>
							</div>
						</Dialog.Panel>
						</Transition.Child>
					</div>
					</div>
				</Dialog>
				</Transition.Root>

		</>
		

	)
}