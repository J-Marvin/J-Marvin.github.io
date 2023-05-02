
import Head from 'next/head';
import { TiRadarOutline } from 'react-icons/ti';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import ProfilePic from '@/components/profilePic';

// https://www.youtube.com/watch?v=k-Pi5ZMxHWY
// TODO:
// Add technical skills/passions?
// Add projects (Proudest of first)
export default function HomePage() {
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
				<section className="min-h-screen">	
					<nav className="p-10 mb-12 flex justify-between">
						<h1 className="text-xl">developed by ML	 </h1>
						<ul className="flex items-center">
							<li><TiRadarOutline className="" /></li>
							<li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" target="_blank" href="/files/Resume.pdf">Resume</a></li>
						</ul>
					</nav>

					<ProfilePic/>

					<div className="text-center p-10 flex flex-col items-center">
						<h2 className="text-5xl py-2  text-teal-600 font-medium">Jan Marvin Lim</h2>
						<h3 className="text-2xl py-2">A Developer.</h3>
						<p className="text-md py-5 md:px-10 lg:w-4/6 leading-8 text-gray-800">
							I'm a Computer Science student currently studying at De La Salle University, Philippines. I aspire to be a software engineer, I love what I do, and I'm excited for the challenges that await me!

						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3">
						<AiFillLinkedin />
						<AiFillGithub />
					</div>
				</section>

				<section></section>
			</main>
		</div>

	)
}