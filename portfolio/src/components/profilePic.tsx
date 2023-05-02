import Image from 'next/image';
import profilePic from '@/assets/images/profile.png';


export default function ProfilePicture() {
    return (
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={profilePic} className="object-cover object-top layout-fill" alt="Profile Picture"/>
        </div>

    )
}