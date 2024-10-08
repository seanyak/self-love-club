import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';

import { Frontmatter } from '@/types/frontmatter';

type FromPath = 'blog';

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, 'data');

export const getAllFrontmatter = (fromPath: FromPath): Frontmatter[] => {
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths.map((filePath) => {
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);

    return {
      ...(data as Frontmatter),
      slug: filePath.replace(`${DATA_PATH}/`, '').replace('.mdx', ''),
      readingTime: readingTime(content),
    } as Frontmatter;
  });
};

export const getMdxBySlug = async (basePath: string, slug: string) => {
  const source = fs.readFileSync(path.join(DATA_PATH, basePath, `${slug}.mdx`), 'utf8');
  const { frontmatter, code } = await bundleMDX({ source });

  return {
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
    } as Frontmatter,
    code,
  };
};
