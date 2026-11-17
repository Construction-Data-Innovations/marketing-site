import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['inside-track', 'product-updates', 'industry-insights', 'co-authored']),
    author: z.string(),
    authorTitle: z.string(),
    publishDate: z.coerce.date(),
    readTime: z.number(),
    heroImage: z.string().optional(),
    sidebarText: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
