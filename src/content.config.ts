import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    image_webp: z.string().optional(),
    author: z.string().default('侯毅農'),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
