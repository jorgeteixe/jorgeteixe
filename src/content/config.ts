import { defineCollection, z } from 'astro:content'

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    lang: z.string(),
    image: z.string().optional()
  })
})

export const collections = { notes }
