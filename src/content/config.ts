import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    recommendations: z.array(z.string()).optional(), // Array of article slugs
  }),
});

export const collections = { articles };