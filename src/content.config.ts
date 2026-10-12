import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['ar', 'en']),
    category: z.string(),
    author: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    translation: z.string().optional(),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { articles };
