import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const figures = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/figures',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    nameAlt: z.string(),
    era: z.string(),
    categories: z.array(z.enum(['literary', 'philosopher', 'religion', 'engineer'])),
    summary: z.string(),
    works: z.array(z.string()).default([]),
    order: z.number().default(100),
  }),
});

export const collections = { figures };
