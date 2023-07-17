import { Component } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Features from "./features";
import { ProjectProps } from "@/lib/projects";
import { SkillProps } from "@/lib/skills";

export default function SkillCard({title, image, competencies}: SkillProps) {
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
                {competencies ? (competencies.length > 0 ? <Features features={competencies}/> : <></>):<></>}

        </div>
    );
}