import { PROJECT_CATEGORIES, PROJECT_TAGS } from '@/constants/PersonalProjects.ts';

import { defineCollection, z } from "astro:content";

//

const projectCategories = PROJECT_CATEGORIES.slice(1) as [
  typeof PROJECT_CATEGORIES[number],
  ...typeof PROJECT_CATEGORIES[number][]
]

const projectTags = Object.keys(PROJECT_TAGS) as [
  keyof typeof PROJECT_TAGS,
  ...(keyof typeof PROJECT_TAGS)[]
]

const personalProjects = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        img: image(),
        imgAlt: z.string(),
        category: z.enum(projectCategories),
        tags: z.array(z.enum(projectTags)),
        url: z.string().url(),
    }),
})

//

export const collections = { "personal-projects": personalProjects }