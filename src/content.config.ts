import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Hard-12 functional roles. */
export const functionKeys = [
  'knowledge',
  'sacred',
  'meaning',
  'order',
  'decision',
  'guard',
  'circulation',
  'enterprise',
  'production',
  'execution',
  'labor',
  'service',
] as const;

/** Digimon-style attributes (primary three only). */
export const attributeKeys = ['vaccine', 'data', 'virus'] as const;

/** Activity fields. */
export const fieldKeys = ['temple', 'canon', 'workshop', 'market', 'land'] as const;

/** Digimon-style development stages used in the gallery. */
export const stageKeys = ['rookie', 'champion', 'perfect', 'mega'] as const;

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
    /** Legacy archive genre; kept in data but not used as a primary filter. */
    categories: z
      .array(z.enum(['literary', 'philosopher', 'religion', 'engineer', 'folk', 'decision']))
      .default([]),
    /** Functional role tags: 1 primary + optional secondaries. */
    functions: z.array(z.enum(functionKeys)).min(1),
    attribute: z.enum(attributeKeys),
    field: z.enum(fieldKeys),
    stage: z.enum(stageKeys),
    summary: z.string(),
    works: z.array(z.string()).default([]),
    essays: z.array(z.string()).default([]),
    order: z.number().default(100),
  }),
});

const essays = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/essays',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    titleAlt: z.string(),
    summary: z.string(),
    figure: z.string(),
  }),
});

export const collections = { figures, essays };
