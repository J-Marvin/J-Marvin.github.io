
import Head from 'next/head';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import ProfilePic from '@/components/profilePic';
import NavBar from '@/components/navbar';
import Link from 'next/link';
import Introduction from '@/components/introduction';
import Card from '@/components/card';
import {ProjectProps, loadProjects} from '@/lib/projects.tsx';

interface HomeProps {
	'projects': Array<ProjectProps>
}


export async function getStaticProps() {
	const projects = await loadProjects();

	return {
		props: {
			projects
		}
	}
}


// https://www.youtube.com/watch?v=k-Pi5ZMxHWY
// TODO:
// Add technical skills/passions?
// Add projects (Proudest of first)
// Fix socmed links
export default function HomePage({ projects } : HomeProps) {
	return (
		<div>
			<Head>
				<title>
					Marvin Lim
				</title>

				<meta name="description" content="Portfolio"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-white px-10">
				
				<NavBar />
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
							<Card title={project.title} desc={project.desc} image={project.image} features={project.features} link={project.link}/>
						))}
					</div>
					
				</section>
				<section>
					<h3 className='text-3xl py-1'>Skills and Interests</h3>
					<p className='text-md py-2 px-10 leading-8 text-gray-800'>
						Over the course of my journey as a Computer Science student, I have delved in
						different fields of study such as <span>Natural Language Processing</span> and <span>Data Science</span>. 
					</p>
				</section>
			</main>
		</div>

	)
}