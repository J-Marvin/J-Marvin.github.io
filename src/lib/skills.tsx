import fs from 'fs';
import path from 'path';
import skills from "@/assets/skills.json";

export interface SkillProps {
    'title': string,
    'image': string,
    'competencies': Array<string>
}

export async function loadSkills() {
    return skills;
}