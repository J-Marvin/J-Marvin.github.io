import fs from 'fs';
import path from 'path';
import projects from "@/assets/projects/projects.json";

export interface ProjectProps {
    'title': string,
    'desc': string,
    'image': string,
    'features': Array<string>,
    'link': string
}

export async function loadProjects() {
    return projects;
}