
import { TiRadarOutline } from 'react-icons/ti';

export default function NavBar() {
    return (
        <nav className="p-10 mb-12 flex justify-between sticky top-0 bg-white z-50">
            <h1 className="text-xl">developed by J-Marvin	 </h1>
            <ul className="flex items-center">
                <li className='text-3xl'><TiRadarOutline className="" /></li>
                <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" target="_blank" href="/files/Resume.pdf">Resume</a></li>
            </ul>
        </nav>
    );
}