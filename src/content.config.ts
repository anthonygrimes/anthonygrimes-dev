import {glob} from 'astro/loaders';
import {defineCollection} from 'astro:content';
import {rssSchema} from '@astrojs/rss';

const blog = defineCollection({
    loader: glob({base: './src/content/blog', pattern: '**/*.{md,mdx}'}),
    schema: rssSchema,
});

export const collections = {blog};
