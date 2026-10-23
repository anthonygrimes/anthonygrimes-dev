import {glob} from 'astro/loaders';
import {defineCollection} from 'astro:content';
import {z} from 'astro/zod';

const blog = defineCollection({
    loader: glob({base: './src/content/blog', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        // Drafts show in `astro dev` but are left out of production builds
        draft: z.boolean().default(false),
    }),
});

export const collections = {blog};
