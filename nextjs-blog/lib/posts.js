import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDir);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDir, fileName);
        const content = fs.readFileSync(fullPath, 'utf8');

        const result = matter(content);

        return {
            id,
            ...result.data
        };
    });

    return allPostsData.sort((a,b) => {
        return a.date < b.date ? 1 : -1;
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDir);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDir, `${id}.md`);
    const content = fs.readFileSync(fullPath, 'utf8');

    const res = matter(content);

    const processedContent = await remark().use(html).process(res.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        contentHtml,
        ...res.data
    };
}