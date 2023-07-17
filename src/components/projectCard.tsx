import { Component } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Features from "./features";
import { ProjectProps } from "@/lib/projects";

export default function ProjectCard({title, desc, image, features, link}: ProjectProps) {
    return (
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                {
                    image ? (
                        <div className="flex justify-center">
                            <Image src={`/images/` + image} width={80} height={80} alt="logo" />
                        </div>
                    ): <></>
                }   
                <h3 className="text-lg font-medium pt-8 pb-2">
                    {title}
                </h3>
                {features ? (features.length > 0 ? <Features features={features}/> : <></>):<></>}

                
                {link ? <Link href={link} target="_blank">
                    <button className="mt-5 rounded-lg px-4 py-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent">
                        <span>Link</span>
                    </button>
                </Link>: <></>}
        </div>
    );
}